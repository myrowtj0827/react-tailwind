import React, { Component } from 'react';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

class Settings extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txt_footer: 'Virtual Venue is a product of Mixily, an event hosting platform that allows the sending of invitations, collection of rsvps, and selling of tickets.',
            flag: false,
        }
    };

    render() {
        let array = [];
        array = [1, 2, 3, 4,5 ,6 ,7, 8, 9, 10, 11, 12];
        return (
            <>
                <div className="try-body">
                    <div className="try-out justify-center">
                        <div className="txt-width txt-bold">try it out</div>
                    </div>
                    <div className="pt-7 flex-left txt-weight-500">
                        <div className="btn-light-design mouse-cursor">default light design</div>
                        <div className="btn-dark-design mouse-cursor">default light design</div>
                        <div className="btn-dark-design mouse-cursor">saved customization</div>
                    </div>
                    <div className="flex-grid grid20 pt-7">
                        <div className="div-border">
                            <div className="flex-grid grid31 pt-7 pr-7 pl-6">
                                <div className="">
                                    <div className="mouse-cursor">
                                        <img src={require('../assets/images/setting1.svg')} />
                                    </div>
                                    <div className="justify-left pt-3 txt-34 txt-regular">
                                        Click to Change Title
                                    </div>
                                </div>
                                <div className="justify-center btn-border-black mouse-cursor txt-24 txt-regular mb-7 ml-7">
                                    CLICK TO ADD LOGO
                                </div>
                            </div>
                            <div className="hr-black">
                                <div className="flex-grid grid31">
                                    <div className="">
                                        <div className="p-5 flex-grid grid-title-change">
                                            {
                                                Object.keys(array).map((item, key) => {
                                                    return (
                                                        <div key={key} className="img-hover mouse-cursor">
                                                            <img src={require('../assets/images/title-image.png')} alt="" />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                        <div className="hr-black p-7">
                                            <div className="flex-justify">
                                                <div className="txt-left">
                                                    <div className="flex">
                                                        <div className="justify-center mouse-cursor">
                                                            <img src={require('../assets/images/setting2.svg')} alt="" />
                                                        </div>
                                                        <div className="justify-center pl-10 mouse-cursor">
                                                            <img src={require('../assets/images/setting3.svg')} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="txt-right">
                                                    <div className="flex">
                                                        <div className="justify-center mouse-cursor">
                                                            <img src={require('../assets/images/setting4.svg')} alt="" />
                                                        </div>
                                                        <div className="justify-center pl-10 mouse-cursor">
                                                            <img src={require('../assets/images/setting5.svg')} alt="" />
                                                        </div>
                                                        <div className="justify-center pl-10 mouse-cursor">
                                                            <img src={require('../assets/images/setting6.svg')} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border-left">
                                        <div className="p-3 justify-left">CHAT</div>
                                        <div className="chat-scroll">sdfdsdfddddddddddddddddddddddddddddddddddddddddddddddd</div>
                                        <div className="txt-position">
                                            <div className="txt-left pl-5">Your name</div>
                                            <div>
                                                <textarea
                                                    placeholder=""
                                                    className="ml-3"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div>
                            <div className="txt-left pb-5">
                                Select multiple elements to bulk customize
                            </div>
                            <div className="div-border txt-14">
                                <div className="justify-left pl-6 pt-3 pb-3">
                                    <img src={require('../assets/images/elliptic-white.svg')} className="mr-3" alt="" />
                                    page background
                                </div>
                                <div className="hr-black pl-6">
                                    <div className="justify-left pt-3">
                                        <img src={require('../assets/images/elliptic-white.svg')} className="mr-3" alt="" />
                                        background
                                    </div>
                                    <div className="justify-left pt-3">
                                        <img src={require('../assets/images/elliptic-white.svg')} className="mr-3" alt="" />
                                        right panel background
                                    </div>
                                    <div className="justify-left pt-3">
                                        <div className="justify-left border-elliptic pr-2">
                                            <img src={require('../assets/images/elliptic-black.svg')} className="mr-3" alt="" />
                                            title text
                                        </div>
                                    </div>
                                    <div className="justify-left pt-3">
                                        <div className="justify-left border-elliptic pr-2">
                                            <img src={require('../assets/images/elliptic-black.svg')} className="mr-3" alt="" />
                                            right panel text
                                        </div>
                                    </div>
                                    <div className="justify-left pt-3">
                                        <div className="justify-left border-elliptic pr-2">
                                            <img src={require('../assets/images/elliptic-black.svg')} className="mr-3" alt="" />
                                            button fill
                                        </div>
                                    </div>
                                    <div className="justify-left pt-3">
                                        <div className="justify-left border-elliptic pr-2">
                                            <img src={require('../assets/images/elliptic-black.svg')} className="mr-3" alt="" />
                                            grid lines
                                        </div>
                                    </div>
                                    <div className="justify-left pt-3">
                                        <div className="justify-left pl-3">
                                            <img src={require('../assets/images/scroll-bar.svg')} className="mr-3" alt="" />
                                            scroll bar
                                        </div>
                                    </div>
                                    <div className="justify-left pt-3">
                                        <div className="justify-left pl-3">
                                            <img src={require('../assets/images/scroll-background.svg')} className="mr-3" alt="" />
                                            scroll bar background
                                        </div>
                                    </div>
                                    <div className="justify-left pt-3 pb-3 mb-2">
                                        <div className="justify-left border-elliptic pt-2 pb-2 pr-2">
                                            upload background image
                                        </div>
                                    </div>
                                </div>

                                <div className="hr-black">
                                    <div className="justify-left border-elliptic mt-5 pt-1 pb-1 ml-6 mr-10 txt-18">
                                        <span className="gray-color">HEX #</span>140201
                                    </div>
                                    <div className="justify-center flex-grid grid2 pr-10 pl-6">
                                        <div className="justify-left border-elliptic mt-6 pt-1 txt-18">
                                            <span className="gray-color">C #</span>100
                                        </div>
                                        <div className="justify-left border-elliptic mt-6 pt-1 txt-18">
                                            <span className="gray-color">R </span>&nbsp;20
                                        </div>
                                        <div className="justify-left border-elliptic mt-6 pt-1 txt-18">
                                            <span className="gray-color">M #</span>100
                                        </div>
                                        <div className="justify-left border-elliptic mt-6 pt-1 txt-18">
                                            <span className="gray-color">G </span>&nbsp;2
                                        </div>
                                        <div className="justify-left border-elliptic mt-6 pt-1 txt-18">
                                            <span className="gray-color">Y #</span>100
                                        </div>
                                        <div className="justify-left border-elliptic mt-6 pt-1 txt-18">
                                            <span className="gray-color">B </span>&nbsp;1
                                        </div>
                                        <div className="justify-left border-elliptic mt-6 pt-1 txt-18">
                                            <span className="gray-color">K #</span>100
                                        </div>
                                    </div>
                                    <div className="mt-5 pl-2 pr-3">
                                        <img src={require('../assets/images/color-settings.png')} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-5 flex-left txt-20 grey-color">
                        *Width condensed for formatting view
                    </div>
                </div>
            </>
        )
    }
}
export default Settings;