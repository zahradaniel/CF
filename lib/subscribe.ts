import { supabase } from './supabaseClient'

export async function subscribeToWaitlist(email: string) {
  const { data, error } = await supabase
    .from('waitlist_subscribers')
    .insert([{ email }]);

  if (error) {
    throw new Error(error.message);
  }

  return data;
}
