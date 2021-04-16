import React from "react";
import s from "./UserPage.module.css"

const UserPage = function () {
    return (
        <div className={`${s.content} content`}>
            <div className={s.userimage}>
                <img src='./user-image.jpg' alt=''/>
            </div>

            <div className={s.userInform}>
                <div className={s.informvalue}>
                    <div>Username
                        <div className={s.username}>Jack Black</div>
                    </div>
                    <div>Sex
                        <div className={s.sex}>Horse</div>
                    </div>
                    <div>City
                        <div className={s.city}>London</div>
                    </div>
                    <div>Familystage
                        <div className={s.familystage}>Inseminator</div>
                    </div>
                    <div>Work
                        <div className={s.work}>Farm</div>
                    </div>
                    <div>Family
                        <div className={s.sisbro}>
                            <div>horse-brother</div>
                            <div>horse-sister</div>
                        </div>
                    </div>
                </div>


            </div>

            <div className={s.userContent}>
                <div className={s.userImage}>user-image</div>
                <div className={s.userMusic}>user-music</div>
                <div className={s.userVideo}>user-video</div>
            </div>

            <div className={s.myposts}>
                <div className={s.postinput}>
                    <fieldset>
                        <legend>New Post</legend>
                        <form id={s.newpost} method="post">
                            <textarea rows="4" cols="45" name="text" placeholder={'Write, pls!'}>1</textarea>
                            <input type="submit" value="Отправить"/>
                        </form>
                    </fieldset>
                </div>
                <div className={s.allposts}>
                    <div className={s.post}>
                        <img src='./user-image.jpg' alt={'23'}/>
                        <div className={s.username}>Jack Black</div>
                        <br/><br/>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus reprehenderit
                            voluptatem. Eum excepturi iste mollitia omnis unde. Blanditiis et expedita incidunt
                            laboriosam nemo nesciunt odio! Aliquam architecto assumenda, ducimus et laborum
                            necessitatibus possimus quam quibusdam repellendus tempora! Dolore doloremque eaque id
                            maxime, nisi non nulla quia? Consequuntur odit quidem sit vel. Culpa dolorem eaque iure
                            quaerat repellendus totam veritatis! A accusamus assumenda aut dolor dolorum ea, eaque
                            facere harum impedit incidunt laboriosam magnam magni nesciunt officia, praesentium quaerat,
                            quasi quibusdam ratione reiciendis repellat repudiandae sapiente sit suscipit unde velit.
                            Aliquid architecto asperiores dolorem dolores ducimus facilis fugit perspiciatis quas.
                        </div>
                        <div className={s.timeInPost}>14:40 11.04.2021</div>

                    </div>
                    <div className={s.post}>
                        <img src='./user-image.jpg' alt={'23'}/>
                        <div className={s.username}>Jack Black</div>
                        <br/><br/>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minus reprehenderit
                            voluptatem. Eum excepturi iste mollitia omnis unde. Blanditiis et expedita incidunt
                            laboriosam nemo nesciunt odio! Aliquam architecto assumenda, ducimus et laborum
                            necessitatibus possimus quam quibusdam repellendus tempora! Dolore doloremque eaque id
                            maxime, nisi non nulla quia? Consequuntur odit quidem sit vel. Culpa dolorem eaque iure
                            quaerat repellendus totam veritatis! A accusamus assumenda aut dolor dolorum ea, eaque
                            facere harum impedit incidunt laboriosam magnam magni nesciunt officia, praesentium quaerat,
                            quasi quibusdam ratione reiciendis repellat repudiandae sapiente sit suscipit unde velit.
                            Aliquid architecto asperiores dolorem dolores ducimus facilis fugit perspiciatis quas.
                        </div>
                        <div className={s.timeInPost}>14:40 11.04.2021</div>

                    </div>

                </div>
            </div>

        </div>
    )
}
export default UserPage;