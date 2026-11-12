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

export async function createAsset(asset, role) {
  const res = await fetch(`${API_BASE}/assets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-User-Role": role
    },
    body: JSON.stringify(asset)
  });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to create asset: ${res.status} ${error}`);
  }

  return res.json();
}
export async function updateTicketStatus(id, newStatus, role) {
  const res = await fetch(
    `${API_BASE}/tickets/${id}/status?newStatus=${encodeURIComponent(newStatus)}`,
    {
      method: "PATCH",
      headers: {
        "X-User-Role": role
      }
    }
  );

  if (!res.ok) {
    const error = await res.text();
    throw new Error(`Failed to update ticket: ${res.status} ${error}`);
  }

  return res.json();
}