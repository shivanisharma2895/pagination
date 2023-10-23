

const Table = (props) => {
    const { tableData } = props;
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>URL</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{tableData.name}</td>
                        <td>{tableData.url}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default Table;