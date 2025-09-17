export default function DateFormat({ date }: { date: any }) {

    if(!date) return null;

    return(
        <span> {date? new Date(date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", }) : ""}</span>
    )
}