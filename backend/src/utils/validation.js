const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validatePayload = payload => {
  if (!payload) {
    return { isValid: false, message: 'Request body is required.' };
  }

  const { name, email, scope } = payload;

  if (!name || name.trim().length < 2) {
    return { isValid: false, message: 'Name must be at least 2 characters.' };
  }

  if (!email || !emailRegex.test(email)) {
    return { isValid: false, message: 'A valid email address is required.' };
  }

  if (!scope) {
    return { isValid: false, message: 'Please select a project scope.' };
  }

  return { isValid: true };
};



