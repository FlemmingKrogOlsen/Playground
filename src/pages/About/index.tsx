import { Main } from '../styled'
import {InfoCard} from '../../components/'


const About = () => {
    return (
        <Main>
            <h2>About</h2>
            <InfoCard header="Have to think about this !!!">

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit corrupti dolorem ipsam quas reiciendis neque earum reprehenderit nulla sunt cupiditate ducimus deserunt libero tempore magnam quasi sed, laboriosam possimus corporis molestiae nostrum pariatur alias praesentium. Accusantium, ipsa quo deserunt libero esse numquam molestiae qui totam perferendis illum cum. Atque blanditiis, laudantium quos nostrum consequatur iure fugit eveniet architecto quisquam quod ex esse ab accusantium veniam cupiditate illum iusto rerum facere at consequuntur explicabo natus mollitia ducimus? Omnis in deserunt perspiciatis similique quisquam, rerum consequuntur accusantium facilis, qui amet culpa, cupiditate perferendis eius veritatis! Asperiores tempore dolor, voluptates accusantium quas quaerat?
            </InfoCard>
            <h3 style={{ marginTop: "40px" }}>What was used?</h3>
            <table style={{ width: "100%" }}>
                <tbody>

                    <tr>
                        <td>
                            React Typescript
                        </td>
                        <td>v 17.0.2 / v 4.1.2</td>
                        <td>
                            <a href=" https://create-react-app.dev/" rel="noreferrer" target="_blank">link</a>
                        </td>
                    </tr>


                    <tr>
                        <td>
                            React Router
                        </td>
                        <td>v 6.0.2</td>
                        <td>
                            <a href="https://reactrouter.com/" rel="noreferrer" target="_blank">link</a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Styled-Components
                        </td>
                        <td>v 5.3.3</td>
                        <td>
                            <a href="https://styled-components.com/" rel="noreferrer" target="_blank">link</a>
                        </td>
                    </tr>


                </tbody>
            </table>

            <hr style={{ margin: "20px 0" }} />
            npx create-react-app --template typescript<br />
            npm add react-router-dom@6 history@5 @types/react-router-dom<br />
            npm install styled-components @types/styled-components

        </Main>
    );
}

export default About