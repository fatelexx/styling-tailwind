export function Avatar() {
    return (
        <div className="flex items-center gap-4">
            <img
                className="w-10 h-10 rounded-full"
                src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                alt=""
            />
            <div className="font-medium dark:text-white">
                <div>Jese Leos</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                    Joined in August 2014
                </div>
            </div>
        </div>

    )
}