-- İhya web sitesi — "Gönüllü Ol" / "Bize Katıl" pop-up formu
-- Kaynak: components/ui/inquiry-modal.tsx (handleSubmit fonksiyonu)
-- Tablo adı ve kolon adları kod içindeki insert çağrısıyla birebir eşleşir.
--
-- Hedef proje: piodabderkovtxvtpwup (ihya-admin ve İhya Mobil ile ortak
-- backend). Yalnızca ekleme yapar, idempotent'tir: mevcut hiçbir tabloya,
-- veriye veya policy'ye dokunmaz; tekrar çalıştırmak güvenlidir.
--
-- NOT: İlk sürümde policy `to anon` olarak tanımlanmıştı; Supabase'in yeni
-- "publishable key" sistemi isteği Postgres'te farklı bir role bağlıyor
-- gibi göründüğünden (ampirik olarak doğrulandı: doğru `anon` policy'si
-- varken 42501 RLS hatası alındı), policy artık `to public` — bu hâlâ
-- sadece INSERT izni veriyor, SELECT/UPDATE/DELETE için hiçbir policy yok.

begin;

create extension if not exists pgcrypto;

create table if not exists public.contact_requests (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  phone text not null,
  email text not null,
  message text,
  source text not null check (source in ('gonullu', 'katil'))
);

alter table public.contact_requests enable row level security;

-- Bu projedeki diğer tablolar (ihya-admin migration'ları) gibi yetkiler açıkça
-- verilir, varsayılan yetkilere güvenilmez: public şemasının varsayılanı yeni
-- tablolarda anon'a INSERT/SELECT vermez ama TRUNCATE/REFERENCES/TRIGGER/
-- MAINTAIN verir. Önce hepsi geri alınır, sonra yalnızca INSERT verilir:
-- ziyaretçiler başvuru bırakabilir ama başvuruları (kişisel veri) okuyamaz.
revoke all on table public.contact_requests from anon, authenticated;
grant insert on table public.contact_requests to anon, authenticated;

drop policy if exists "contact_requests_anon_insert" on public.contact_requests;
drop policy if exists "contact_requests_public_insert" on public.contact_requests;

create policy "contact_requests_public_insert"
  on public.contact_requests
  for insert
  to public
  with check (true);

NOTIFY pgrst, 'reload schema';

commit;
