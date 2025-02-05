import { StreamChat } from "stream-chat";
import { clerkClient } from "@clerk/nextjs/server";

const api_key = "your_api_key_here";
const api_secret = "your_api_secret_here";

export async function POST(request: Request) {
    const serverClient = StreamChat.getInstance(api_key, api_secret);
    const user = await request.json();

    function capitalize(str: string) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    const token = serverClient.createToken(user.data.id);
    // console.log("A new user has been created", token);
    const client = await clerkClient();
    await serverClient.upsertUser({id: user.data.id, role: "admin"})

    await client.users.updateUserMetadata(user.data.id, {
        publicMetadata: {
            token: token,
        },
    })

    const slugs = ["React", "Javascript", "Node_js", "TypeScript", "Next_js", "TailwindCSS", "MongoDB", "Figma"];
    slugs.forEach(async (item) => {
        const channel = serverClient.channel("messaging", item, {
            image: `https://getstream.io/random_png/?name=${item}`,
            name: capitalize(item) + " Discussion",
            created_by_id: user.data.id,
        });
        await channel.create();
        channel.addMembers([user.data.id]);
    })

    return Response.json({ message: "Hii" })
}