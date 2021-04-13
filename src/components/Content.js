import React from "react";

const UserPage = function () {
    return (
        <div className="content">
            <div className="userimage">
                <img src='./user-image.jpg' alt=''/>
            </div>

            <div className="user-inform">
                <div className="informvalue">
                    <div>Username
                        <div className="username">Jack Black</div>
                    </div>
                    <div>Sex
                        <div className="sex">Horse</div>
                    </div>
                    <div>City
                        <div className="city">London</div>
                    </div>
                    <div>Familystage
                        <div className="familystage">Inseminator</div>
                    </div>
                    <div>Work
                        <div className="work">Farm</div>
                    </div>
                    <div>Family
                        <div className="sisbro">
                            <div>horse-brother</div>
                            <div>horse-sister</div>
                        </div>
                    </div>
                </div>


            </div>

            <div className="user-content">
                <div className="user-image">user-image</div>
                <div className="user-music">user-music</div>
                <div className="user-video">user-video</div>
            </div>

            <div className="myposts">
                <div className="postinput">
                    <fieldset>
                        <legend>New Post</legend>
                        <form id='newpost' method="post">
                            <textarea rows="4" cols="45" name="text" placeholder={'Write, pls!'}>1</textarea>
                            <input type="submit" value="Отправить"/>
                        </form>
                    </fieldset>
                </div>
                <div className="allposts">
                    <div className="post">
                        <img src='./user-image.jpg' alt={'23'}/>
                        <div className='username'>Jack Black</div>
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
                        <div className='time-in-post'>14:40 11.04.2021</div>

                    </div>
                    <div className="post">
                        <img src='./user-image.jpg' alt={'21'}/>
                        <div className='username'>Jack Black</div>
                        <br/><br/>
                        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, alias atque distinctio ea
                            error hic incidunt molestiae nesciunt nobis officiis porro possimus recusandae rem, tempora,
                            vero voluptate voluptatibus! Assumenda atque distinctio, dolorem doloribus eius eligendi eos
                            esse fugiat harum in ipsam magnam, nemo odio placeat quaerat quam quis quod rem sint soluta!
                            Doloremque error illum non praesentium qui rerum sint. Eaque eveniet exercitationem facilis
                            fugit natus odit qui saepe tenetur ut. Alias amet atque dicta ea ex incidunt molestias,
                            neque officia porro quaerat? Accusantium aliquam architecto atque consectetur dicta eos,
                            expedita inventore ipsum itaque laborum magni mollitia odio perferendis, possimus quia
                            repellat reprehenderit sapiente totam ullam voluptas. Amet asperiores at cupiditate dicta
                            distinctio, ducimus, et fugit illo impedit ipsum itaque iure maiores non placeat provident
                            quam quasi qui ratione rerum, sed tempore vel veritatis voluptate? Debitis dignissimos dolor
                            ea eos error harum, illum iusto minus nam nesciunt nulla repudiandae sit vel. Accusantium
                            adipisci architecto at aut consequatur cumque deserunt earum error incidunt ipsum laboriosam
                            natus officiis, omnis praesentium quas quod, recusandae reprehenderit sit voluptas
                            voluptatum. Aspernatur blanditiis corporis culpa debitis dolorem dolorum, eius error in,
                            ipsa itaque molestiae neque nihil numquam reprehenderit ut? Adipisci, aperiam architecto
                            asperiores consequatur dolorem fugiat, hic iste laborum nulla odio provident quaerat, quasi
                            recusandae reprehenderit similique veritatis voluptate voluptatibus voluptatum. Accusantium
                            ad aperiam, aspernatur aut eaque earum eius eos exercitationem expedita explicabo hic
                            inventore ipsam quas quod reprehenderit velit voluptatum. Accusantium assumenda aut
                            dignissimos dolor dolore, doloremque doloribus, eaque enim exercitationem fugit laborum
                            nobis nostrum numquam, omnis perspiciatis repellat reprehenderit saepe sed tempore vel.
                            Alias blanditiis commodi magnam quaerat quibusdam suscipit, vitae! Accusantium adipisci
                            assumenda at blanditiis, consequatur deserunt dignissimos dolor error excepturi fugiat id
                            iusto magnam magni mollitia necessitatibus neque officia perspiciatis possimus praesentium
                            quaerat, qui ratione recusandae sint vero voluptatibus. Adipisci alias aliquid animi aperiam
                            aut autem cumque debitis dolore dolores eaque eos error esse est exercitationem explicabo
                            facere hic id in incidunt ipsam laudantium magni maiores molestiae, nisi non numquam quae
                            quaerat rem saepe sit vel veniam vitae voluptate? Ab asperiores aspernatur blanditiis
                            consectetur consequuntur distinctio dolor doloremque, earum eius eos et, id impedit in iure
                            labore libero nemo nihil perferendis perspiciatis quia quo recusandae reiciendis, sed sit
                            unde vel voluptatem. Ab deserunt ex laboriosam magni modi nisi non qui sint. Architecto
                            asperiores aut dolorem, et inventore iste minima nesciunt nisi nostrum nulla placeat
                            praesentium quo repellendus repudiandae sint sunt suscipit tenetur.
                        </div>
                        <div className='time-in-post'>14:40 11.04.2021</div>

                    </div>
                    <div className="post">
                        <img src='./user-image.jpg' alt={'22'}/>
                        <div className='username'>Jack Black</div>
                        <br/><br/>
                        <div>iandae sapiente sit suscipit unde velit.
                            Aliquid architecto asperiores dolorem dolores ducimus facilis
                            fugit perspiciatis quas.
                        </div>
                        <div className='time-in-post'>14:40 11.04.2021</div>

                    </div>

                </div>
            </div>

        </div>
    )
}
export default UserPage;