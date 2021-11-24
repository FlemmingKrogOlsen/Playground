import { Main } from '../styled'

const About = () => {
    return (
        <Main>
            <h2>About</h2>

            <h3 style={{ marginTop: "40px" }}>What was used?</h3>
            <table style={{ width: "100%" }}>
                <tbody>

                    <tr>
                        <td>
                            React Typescript
                        </td>
                        <td>v 17.0.2 / v 4.1.2</td>
                        <td style={{ textAlign: "right" }}>
                            <a href=" https://create-react-app.dev/" rel="noreferrer" target="_blank">link</a>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            React Router
                        </td>
                        <td>v 6.0.2</td>
                        <td style={{ textAlign: "right" }}>
                            <a href="https://reactrouter.com/" rel="noreferrer" target="_blank">link</a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Styled-Components
                        </td>
                        <td>v 5.3.3</td>
                        <td style={{ textAlign: "right" }}>
                            <a href="https://styled-components.com/" rel="noreferrer" target="_blank">link</a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            GH Pages (GitHub Pages - Deploy CI/CD)
                        </td>
                        <td>v 3.2.3</td>
                        <td style={{ textAlign: "right" }}>
                            <a href="https://github.com/tschaub/gh-pages" rel="noreferrer" target="_blank">link</a>
                        </td>
                    </tr>


                </tbody>
            </table>

            <hr style={{ margin: "20px 0" }} />
            npx create-react-app --template typescript<br />
            npm install react-router-dom@6 history@5 @types/react-router-dom<br />
            npm install styled-components @types/styled-components<br />
            npm install gh-pages --save-dev<br />
            <br /><br /><br />
            more info as we go along :P
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            Curiosity killed the cat.....
        </Main>
    );
}

export default About