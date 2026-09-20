'use client';

import React from 'react';
import { Container } from '@/components/layout/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Database, Key, Link2, Terminal } from 'lucide-react';

export const DatabaseSection: React.FC = () => {
  const tables = [
    {
      name: 'users',
      purpose: 'User credentials & role authorization',
      fields: [
        { name: 'id', type: 'INT (PK)', isKey: true, desc: 'Auto increment primary key' },
        { name: 'name', type: 'VARCHAR(100)', isKey: false, desc: 'Full customer / user name' },
        { name: 'email', type: 'VARCHAR(150) UNIQUE', isKey: false, desc: 'Unique account identifier' },
        { name: 'password_hash', type: 'VARCHAR(255)', isKey: false, desc: 'Bcrypt hashed string' },
        { name: 'role', type: 'ENUM("admin","user")', isKey: false, desc: 'Authorization scope' },
        { name: 'created_at', type: 'TIMESTAMP', isKey: false, desc: 'Record creation timestamp' },
      ],
    },
    {
      name: 'products',
      purpose: 'Equipment catalog & inventory control',
      fields: [
        { name: 'id', type: 'INT (PK)', isKey: true, desc: 'Auto increment primary key' },
        { name: 'name', type: 'VARCHAR(150)', isKey: false, desc: 'Item model (e.g., Tenda 4P)' },
        { name: 'category', type: 'VARCHAR(50)', isKey: false, desc: 'Tents, Packs, Cooking' },
        { name: 'price_per_day', type: 'DECIMAL(10,2)', isKey: false, desc: 'Daily rental fee' },
        { name: 'stock_total', type: 'INT', isKey: false, desc: 'Physical inventory units' },
        { name: 'is_active', type: 'BOOLEAN', isKey: false, desc: 'Availability toggle' },
      ],
    },
    {
      name: 'rentals',
      purpose: 'Temporal reservation & booking transactions',
      fields: [
        { name: 'id', type: 'INT (PK)', isKey: true, desc: 'Auto increment primary key' },
        { name: 'user_id', type: 'INT (FK)', isKey: true, desc: 'References users(id)' },
        { name: 'product_id', type: 'INT (FK)', isKey: true, desc: 'References products(id)' },
        { name: 'start_date', type: 'DATE', isKey: false, desc: 'Booking start' },
        { name: 'end_date', type: 'DATE', isKey: false, desc: 'Expected return date' },
        { name: 'status', type: 'ENUM("booked","active","returned")', isKey: false, desc: 'Lifecycle' },
      ],
    },
  ];

  return (
    <section id="database" className="py-16 md:py-24 border-b-2 border-zinc-950 bg-white relative">
      <Container>
        <SectionHeader
          number="DATA"
          category="SCHEMA DESIGN // 3NF"
          title="RELATIONAL PERSISTENCE ARCHITECTURE"
          subtitle="In Web Application Engineering, resilient software begins with disciplined schema modeling. Below is the normalized schema designed for DANATRAIL."
        />

        {/* Database Schema Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tables.map((table) => (
            <div
              key={table.name}
              className="border-2 border-zinc-950 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Table Header */}
                <div className="flex items-center justify-between border-b-2 border-zinc-950 bg-zinc-950 text-white px-4 py-3">
                  <div className="flex items-center gap-2">
                    <Database className="h-4 w-4 text-yellow-400" />
                    <span className="font-mono text-sm font-black tracking-wider text-yellow-400">
                      TABLE // {table.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono font-bold text-zinc-400">ENGINE: INNODB</span>
                </div>

                <div className="p-3 text-[11px] font-mono text-zinc-600 border-b-2 border-zinc-950 bg-zinc-100">
                  //{table.purpose}
                </div>

                {/* Field List */}
                <div className="divide-y-2 border-b-2 border-zinc-950 divide-zinc-200 font-mono text-xs">
                  {table.fields.map((field) => (
                    <div
                      key={field.name}
                      className="px-4 py-2.5 flex items-center justify-between hover:bg-zinc-50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        {field.isKey ? (
                          <Key className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                        ) : (
                          <span className="w-1.5 h-1.5 bg-zinc-400 rounded-full shrink-0" />
                        )}
                        <span className={`font-bold ${field.isKey ? 'text-zinc-950 underline underline-offset-2' : 'text-zinc-800'}`}>
                          {field.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-zinc-500 bg-zinc-100 px-1.5 py-0.5 border border-zinc-300">
                        {field.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-3 bg-zinc-50 text-[11px] font-mono font-bold text-zinc-600 flex items-center justify-between">
                <span>[ 3NF_NORMALIZED ]</span>
                <span className="text-emerald-700 font-black">FK_CONSTRAINTS_ON</span>
              </div>
            </div>
          ))}
        </div>

        {/* Engineering Takeaway Note */}
        <div className="mt-8 border-2 border-zinc-950 bg-yellow-300 p-5 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link2 className="h-5 w-5 text-zinc-950 shrink-0" />
            <div>
              <span className="font-black text-zinc-950 block text-sm font-mono">
                RELATIONAL INTEGRITY & TRANSACTION SAFETY
              </span>
              <span className="text-xs text-zinc-900 font-medium">
                Foreign keys (<code className="bg-white/80 px-1 py-0.5 border border-zinc-950">rentals.user_id</code> and <code className="bg-white/80 px-1 py-0.5 border border-zinc-950">rentals.product_id</code>) guarantee referential integrity and eliminate orphan booking anomalies.
              </span>
            </div>
          </div>
          <div className="shrink-0 font-mono text-xs font-black text-zinc-950 bg-white px-3 py-1.5 border-2 border-zinc-950 shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center gap-1.5">
            <Terminal className="w-3.5 h-3.5 text-zinc-950" />
            <span>MYSQL 8.0 // ACID</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

