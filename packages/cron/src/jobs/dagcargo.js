import debug from 'debug'

/**
 * Refreshes the materialized views.
 *
 * @param {{ pg: import('pg').Client }} config
 */
export async function refreshMaterializedViews ({ pg }) {
  const log = debug('dagcargo:refreshMaterializedViews')
  if (!log.enabled) {
    console.log(
      'âšī¸ Enable logging by setting DEBUG=dagcargo:refreshMaterializedViews'
    )
  }

  log('đ REFRESH MATERIALIZED VIEW CONCURRENTLY public.deal;')
  await pg.query('REFRESH MATERIALIZED VIEW CONCURRENTLY public.deal;')

  log('đ REFRESH MATERIALIZED VIEW CONCURRENTLY public.aggregate;')
  await pg.query('REFRESH MATERIALIZED VIEW CONCURRENTLY public.aggregate;')

  log('đ REFRESH MATERIALIZED VIEW CONCURRENTLY public.aggregate_entry;')
  await pg.query('REFRESH MATERIALIZED VIEW CONCURRENTLY public.aggregate_entry;')

  log('â Done')
}
