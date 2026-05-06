/* ======================
   MODEL (Validation)
   ====================== */
const Model = {
    validateDisplayName(name) {
        if (!name.trim()) return "Display name is required.";
        if (name.trim().length < 2) return "Display name must be at least 2 characters.";
        if (!/^[a-zA-Z0-9\s'-]+$/.test(name)) {
            return "Display name contains invalid characters.";
        }
        return null;
    },

    validateEmail(email) {
        if (!email.trim()) return "Username is required.";
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return "Enter a valid email address.";
        }
        return null;
    },

    validatePassword(password) {
        if (!password.trim()) return "Password is required.";
        if (password.length < 8) return "Password must be at least 8 characters.";
        if (!/[A-Z]/.test(password)) return "Must include at least one uppercase letter.";
        if (!/[a-z]/.test(password)) return "Must include at least one lowercase letter.";
        if (!/[0-9]/.test(password)) return "Must include at least one number.";
        if (!/[!@#$%^&*]/.test(password)) return "Must include at least one special character.";
        return null;
    }
};


/* ======================
   VIEW (Reusable UI helpers)
   ====================== */
const View = {
    showError(el, msg) {
        el.textContent = msg;
        el.classList.add('show');
    },

    clearError(el) {
        el.textContent = '';
        el.classList.remove('show');
    },

    clearErrors(elements) {
        elements.forEach(el => this.clearError(el));
    }
};