export default function Page() {

    return(
        <main>
            <header>
                <h1>Secure Page</h1>
            </header>
            <section>
                {user ? (
                        <p>Welcome, {user.displayName}. you are sign in</p>

                ) : (
                        <p>you musrt sign in the see context</p>
                )}
                <p>This contect can only be view when you'r sifgn in</p>
            </section>
        </main>
    )
}