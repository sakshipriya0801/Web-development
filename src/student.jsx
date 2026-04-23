function Student(props) {
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.name}</td>
            <td>{props.age}</td>
        </tr>
    );
}

export default Student;
