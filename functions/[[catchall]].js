export const onRequest = async (context) => {
  const url = new URL(context.request.url);
  if (url.pathname === '/api/health') {
    return new Response(JSON.stringify({ success: true, message: 'Minimal Test' }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  if (url.pathname === '/api/test') {
    return new Response(JSON.stringify({ success: true, path: url.pathname }), {
      headers: { 'Content-Type': 'application/json' }
    });
  }
  return context.next();
};