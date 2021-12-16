import Thumbnail from "./Thumbnail"
import FlipMove from "react-flip-move"

function Result({ request }) {
    return (
        <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
            {(request ?? []).map((item, index) =>
                <Thumbnail key={item.id} item={item} />
            )}
        </FlipMove>
    )
}

export default Result
