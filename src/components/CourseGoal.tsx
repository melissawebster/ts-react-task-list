interface CouseGoalProps {
    title: string;
    description: string;
}

export default function CourseGoal({
    title,
    description
} : CouseGoalProps) {
    
    return (
        <article>
            <h2>{title}</h2>
            <p>{description}</p>
            <button>Delete</button>
        </article>
    )
}