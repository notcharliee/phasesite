// next
import { redirect } from 'next/navigation'


export default function page() {
    if(process.env.NODE_ENV == 'development') {
        redirect('https://discord.com/oauth2/authorize?client_id=1078305837245796483&response_type=code&scope=guilds%20identify%20bot%20applications.commands&redirect_uri=http://localhost:3000/api/login&permissions=486911216')
    } else {
        redirect('https://discord.com/oauth2/authorize?client_id=1078305837245796483&response_type=code&scope=guilds%20identify%20bot%20applications.commands&redirect_uri=https://phasebot.xyz/api/login&permissions=486911216')
    }
}