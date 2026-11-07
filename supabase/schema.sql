-- Eseguire nel SQL Editor del proprio progetto Supabase.
-- Gli eventi sono immutabili: più dispositivi possono aggiungerli senza sovrascriversi.
create table if not exists public.training_events (
  id uuid primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  payload jsonb not null,
  created_at timestamptz not null default now(),
  constraint valid_payload check (
    jsonb_typeof(payload) = 'object'
    and payload ?& array['id','type','module','at']
    and payload ->> 'id' = id::text
    and payload ->> 'type' in ('answer', 'session')
    and payload ->> 'module' in ('ear','interval','rhythm','reading','theory','melody','voice')
    and octet_length(payload::text) < 8192
  )
);
create index if not exists training_events_owner_date on public.training_events (user_id, created_at, id);
alter table public.training_events enable row level security;
revoke all on public.training_events from anon, authenticated;
grant select, insert on public.training_events to authenticated;
drop policy if exists "Read own training events" on public.training_events;
create policy "Read own training events" on public.training_events for select to authenticated using ((select auth.uid()) = user_id);
drop policy if exists "Insert own training events" on public.training_events;
create policy "Insert own training events" on public.training_events for insert to authenticated with check ((select auth.uid()) = user_id);
-- Nessun UPDATE/DELETE dal browser. ON CONFLICT DO NOTHING rende i retry idempotenti.
