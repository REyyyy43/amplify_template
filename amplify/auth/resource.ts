export const auth = defineAuth({
  loginWith: {
    email: true,
    phone: false, // or true if you want phone sign-in
  },
  userAttributes: {
    email: {
      required: true,
      mutable: true,
    },
    // You could add additional attributes here
  },
  passwordPolicy: {
    minLength: 8,
    requireLowercase: true,
    requireDigits: true,
    // etc.
  },
  mfa: {
    // optional two-factor auth settings
    mode: 'OFF', // or 'OPTIONAL', 'ON'
  },
});
function defineAuth(arg0: {
  loginWith: { email: boolean; phone: boolean; }; userAttributes: { email: { required: boolean; mutable: boolean; }; }; passwordPolicy: { minLength: number; requireLowercase: boolean; requireDigits: boolean; }; mfa: {
    // optional two-factor auth settings
    mode: string;
  };
}) {
  throw new Error("Function not implemented.");
}

