import IconAlert from "./icons/IconAlert"

function NothingFound() {
    return (
        <div className="p-4 w-full">
            <h3 className="font-gordeziani text-3xl font-light flex items-center gap-2">
              <IconAlert />  არაფერი მოიძებნა
            </h3>
        </div>
    )
}

export default NothingFound