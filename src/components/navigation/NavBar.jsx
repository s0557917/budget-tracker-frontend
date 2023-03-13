import { Avatar, Box } from "@chakra-ui/react"

export default function NavBar() {
    return(
        <div className="bg-[#DCDCDC] p-2">
            <div className="flex justify-between">
                <Avatar name="Test User" bg="#000000"></Avatar>
                <div className="flex space-x-5 items-center px-3">
                    <a href="#" className="font-bold text-lg">Log-In</a>
                    <a href="#" className="font-bold text-lg">Sign-Up</a>
                </div>
            </div>
        </div>
    )
}