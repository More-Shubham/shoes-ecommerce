'use server';

async function login(form: FormData) : Promise<{ status: 'success' | 'error', message: string }> {
    const username = form.get('username')
    const password = form.get('password')
    console.log(username, password);
    return { status: 'error', message: '' }
}

export { login }