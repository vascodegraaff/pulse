import { createClient } from '@supabase/supabase-js';

// const supabaseUrl = process.env.SUPABASE_URL;
// const supabaseKey = process.env.SUPABASE_KEY;

const supabaseUrl = "https://evjmeiedogqjihlcbdef.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV2am1laWVkb2dxamlobGNiZGVmIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODUwMzEyMSwiZXhwIjoyMDE0MDc5MTIxfQ.wtPNHmelWXnM0i1JQmXGlkdQcxD02iVIRwNccgx_buE"

const supabase = createClient(supabaseUrl, supabaseKey);

export async function getQuestions() {
	const { data, error } = await supabase
			.from('Question')
			.select('*')
			.order('order', { ascending: true });

	if (error) throw new Error(error.message);
	return data;
}
