import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Home',
}

export default function hello() {
    return (
        <div>
            <h1>Hello NextJs</h1>
        </div>
    );
}