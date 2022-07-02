export default function Progress() {
    return (
        <div class="col">
            <div class="progress progress-sm mr-2 mt-2" style={{height : "7px"}}>
                <div class="progress-bar bg-info" role="progressbar"
                    style={{width: "50%" }} aria-valuenow="50%" aria-valuemin="0"
                    aria-valuemax="100"></div>
            </div>
        </div>
    )
}