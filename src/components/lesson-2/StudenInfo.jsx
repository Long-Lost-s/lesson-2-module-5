export function StudentInfo() {
    const student = [{
        id: 1,
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },
    {
        id: 2,
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        id: 3,
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        id: 4,
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        id: 5,
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
        id: 6,
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
    }]

    return <>
        <table>
            <tr>
                <th>Id</th>
                <th>Company</th>
                <th>Contact</th>
                <th>Contry</th>
            </tr>
            {student.map(student => <tr key={student.id}><td>{student.id}</td><td>{student.company}</td><td>{student.contact}</td><td>{student.country}</td></tr>
            )}
        </table>

    </>
}