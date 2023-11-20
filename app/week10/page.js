"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";


export default function Page() {

    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();


    async function handleSignIn() {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.log(error);
        }
    }

    async function handleSignOut() {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.log(error);
        }
    }

    console.log(user);

    return(
        <main className="flex justify-center items-center w-full h-screen">
        <div class="w-full max-w-md text-white bg-black p-10 rounded-lg shadow-md">
            <header>
                <h1>Login Page</h1>
            </header>
            <section>
                { user ? (
                    <div>
                        <p>Welcome, {user.displayName} | {user.email}</p>
                        <img src={user.photoURL} width="50"/>
                        <p>Your user ID is: {user.uid}</p>
                        <br></br>
                        <div class="flex flex-col items-center justify-center">
                        <button className=" font-bold px-10 py-2 text-white bg-black border-2 border-white m-2 rounded hover:bg-purple-700 active:bg-blue-700 text-white">
                        <Link href="/week10/shopping-list">shopping list page</Link>
                        </button>
                        <button className="font-bold px-20 py-2 text-white bg-black border-2 border-white m-2 rounded hover:bg-purple-700 active:bg-blue-700 text-white" onClick={handleSignOut}>
                            sign out
                        </button>
                        </div>
                    </div>
                ) : (
                    <div>
                        <button className="text-lg m-2 hover:underline" onClick={handleSignIn}>
                            sign in
                        </button>
                    </div>
                ) }
            </section>
            </div>
        </main>
    )
}