import React from 'react'

const About = () => {
    return (
        <div>
            <section className="section-other-reasons pt-5 pb-5">
                <div className="container">
                    <div className="row text-center p-3">
                        <h2> WHY CHOOSE US?</h2>
                    </div>
                    <div className="row">
                        <div className="col-8 reason-list">
                            <div className="row">
                                <div className="col-sm-6">
                                    <div>
                                        <img width={40} height={40} src="https://cdn.battlefy.com/helix/images/org-marketing/icons/activity.png" />
                                        <h3 className="mt-2"><span>Activity</span></h3>
                                        <p className="mt-2"><span>Get a timestamped log of every event in your tournament so you always know exactly what's happening.</span></p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div>
                                        <img width={40} height={40} src="https://cdn.battlefy.com/helix/images/org-marketing/icons/checkin.png" />
                                        <h3 className="mt-2"><span>Check Ins</span></h3>
                                        <p className="mt-2"><span>Eliminate no-shows with our one click check in system so you only seed the players who are available and
                                            ready to play.</span></p>
                                    </div>
                                </div>
                            </div>
                            <div className="row ">
                                <div className="col-sm-6">
                                    <div>
                                        <img width={40} height={40} src="https://cdn.battlefy.com/helix/images/org-marketing/icons/email.png" />
                                        <h3 className="mt-2"><span>Email</span></h3>
                                        <p className="mt-2"><span>Easily inform your participants about the information they need to know as the tournament start date approaches.</span></p>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div>
                                        <img width={40} height={40} src="https://cdn.battlefy.com/helix/images/org-marketing/icons/brackets.png" />
                                        <h3 className="mt-2"><span>Flexible Brackets</span></h3>
                                        <p className="mt-2"><span>Mix and match single elimination, double elimination, Swiss, and round robin brackets for every tournament
                                            structure you can imagine.</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=" col-lg-4 text-center">
                                <div className="row justify-content-center">
                                    <img id="computer-screen" src="./homepage img/about-img.png" alt="" />
                                </div>
                        </div>
                    </div>

                </div>
            </section>

        </div>
    )
}

export default About