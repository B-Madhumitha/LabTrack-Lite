const API_BASE = "https://labtrack-lite-backend-2026.onrender.com";

export async function getAssets(role) {
  const res = await fetch(`${API_BASE}/assets`, {
    headers: {
      "X-User-Role": role
    }
  });
  return res.json();
}

export async function getTickets(role) {
  const res = await fetch(`${API_BASE}/tickets`, {
    headers: {
      "X-User-Role": role
    }
  });
  return res.json();
}

export async function createTicket(ticket, role) {
  const res = await fetch(`${API_BASE}/tickets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-User-Role": role
    },
    body: JSON.stringify(ticket)
  });

  if (!res.ok) {
    throw new Error("Forbidden");
  }

  return res.json();
}
