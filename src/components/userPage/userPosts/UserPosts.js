import React from "react";
import s from "./UserPosts.module.css"

const UserPosts = function () {
    return (
        <div className={s.userPosts}>
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


            </div>
        </div>


    )
}
export default UserPosts;