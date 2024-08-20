import IconAlert from "./icons/IconAlert"

function NothingFound({title = 'არაფერი მოიძებნა'}) {
    return (
        <div className="p-4 w-full">
            <h3 className="font-gordeziani text-3xl font-light flex items-center gap-2">
              <IconAlert />  {title}
            </h3>
        </div>
    )
}

export default NothingFound