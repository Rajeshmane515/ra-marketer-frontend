const API_URL = import.meta.env.VITE_API_URL;

const getToken = () => {
  return localStorage.getItem("adminToken");
};

const adminRequest = async (endpoint, options = {}) => {
  const token = getToken();

  if (!token) {
    throw new Error("ADMIN_UNAUTHORIZED");
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,

    headers: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  });

  // Token expired / invalid
  if (response.status === 401) {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("admin");

    throw new Error("ADMIN_UNAUTHORIZED");
  }

  return response;
};

/*
|--------------------------------------------------------------------------
| GET
|--------------------------------------------------------------------------
*/

export const adminGet = async (endpoint) => {
  return adminRequest(endpoint, {
    method: "GET",
  });
};

/*
|--------------------------------------------------------------------------
| POST
|--------------------------------------------------------------------------
*/

export const adminPost = async (endpoint, data) => {
  return adminRequest(endpoint, {
    method: "POST",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
};

/*
|--------------------------------------------------------------------------
| PUT
|--------------------------------------------------------------------------
*/

export const adminPut = async (endpoint, data) => {
  return adminRequest(endpoint, {
    method: "PUT",

    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify(data),
  });
};

/*
|--------------------------------------------------------------------------
| DELETE
|--------------------------------------------------------------------------
*/

export const adminDelete = async (endpoint) => {
  return adminRequest(endpoint, {
    method: "DELETE",
  });
};

/*
|--------------------------------------------------------------------------
| Download File
|--------------------------------------------------------------------------
*/

export const adminDownload = async (endpoint) => {
  const response = await adminRequest(endpoint, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("DOWNLOAD_FAILED");
  }

  return response.blob();
};

export default adminRequest;