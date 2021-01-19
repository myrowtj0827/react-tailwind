import React, { Component } from 'react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
import Settings from "./settings";
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txt_footer: 'Virtual Venue is a product of Mixily, an event hosting platform that allows the sending of invitations, collection of rsvps, and selling of tickets.',
            flag: false,
        }
    };

    onLearnMore = () => {
        this.setState({
            flag: !this.state.flag,
        })
    };

    render() {
        return (
            <>
                <div className="pt-140">
                    <div className="txt-90 txt-medium">Virtual Venue</div>
                    <div className="txt-30">presented by Mixily</div>
                </div>
                <div className="pt-140 embed-width">
                    <div className="txt-90 txt-light">
                        Embed a custom-branded Virtual Venue right into your website
                    </div>
                </div>
                <div className="justify-center mouse-cursor pt-20">
                    <div className="btn-sign txt-semi-bold">SIGN UP</div>
                </div>
                <div className="pt-140 flex-justify">
                    <div className="text-width txt-30">
                        <div className="txt-detail-width">Virtual Venue</div>
                    </div>
                    <div className="img-width">
                        <img src={require('../assets/images/virtual-venue.svg')} className="" alt='Virtual Venue' />
                    </div>
                </div>

                <div className="pt-140 pt-120">
                    <div className="grid-body justify-cover">
                        <div className="pb-8 txt-24 txt-left gray-color">Click to expand examples</div>
                        {/*<div className="slider-hidden">*/}
                        <div>
                            <div className="flex-grid grid3">
                                <div className="flex-left img-hover mouse-cursor">
                                    <img src={require('../assets/images/screen-image1.png')} className="img-item" alt='' />
                                </div>
                                <div className="flex-left img-hover mouse-cursor">
                                    <img src={require('../assets/images/screen-image2.png')} className="img-item" alt='' />
                                </div>
                                <div className="flex-left img-hover mouse-cursor">
                                    <img src={require('../assets/images/screen-image3.png')} className="img-item" alt='' />
                                </div>
                            </div>
                        </div>

                        {/*  3 image Slider  */}
                        {/*<div className="slider-banner slider-show">*/}
                        {/*    <OwlCarousel items={1}*/}
                        {/*                 className="owl-theme animate-fading"*/}
                        {/*                 loop*/}
                        {/*                 nav*/}
                        {/*                 margin={4}*/}
                        {/*                 autoplayTimeout={2000}*/}
                        {/*                 autoplay={true}*/}
                        {/*    >*/}
                        {/*        <div>*/}
                        {/*            <img src={require('../assets/images/screen-image1.png')} className="img-item" alt='' />*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <img src={require('../assets/images/screen-image2.png')} className="img-item" alt='' />*/}
                        {/*        </div>*/}
                        {/*        <div>*/}
                        {/*            <img src={require('../assets/images/screen-image3.png')} className="img-item" alt='' />*/}
                        {/*        </div>*/}
                        {/*    </OwlCarousel>*/}
                        {/*</div>*/}
                    </div>
                </div>

                {/*  Key Benefits  */}
                <div className="pt-140">
                    <div className="key-benefits">
                        <div className="txt-70 white-color txt-bold">Key Benefits</div>
                        <div className="pt-20 white-color txt-26">
                            <div className="flex-grid grid4">
                                <div className="">
                                    <div className="img-hover mouse-cursor">
                                        <img src={require('../assets/images/Mixily_LandingPage_KeyFeatures_A.png')} className="" alt='' />
                                    </div>
                                    <div className="pt-6 txt-regular">Custom branding</div>
                                </div>
                                <div className="">
                                    <div className="img-hover mouse-cursor">
                                        <img src={require('../assets/images/Mixily_LandingPage_KeyFeatures_B.png')} className="" alt='' />
                                    </div>
                                    <div className="pt-6 txt-regular">
                                        A home for your events instead of a hard-to-find Zoom link
                                    </div>
                                </div>
                                <div className="">
                                    <div className="img-hover mouse-cursor">
                                        <img src={require('../assets/images/Mixily_LandingPage_KeyFeatures_C.png')} className="" alt='' />
                                    </div>
                                    <div className="pt-6 txt-regular">
                                        Direct quests to other goods / services
                                    </div>
                                    <div className="pt-6 main-color txt-16 txt-width">
                                        "Just click the Shop link at the top of the page"
                                    </div>
                                </div>
                                <div className="image-coming">
                                    <div className="img-hover mouse-cursor">
                                        <img src={require('../assets/images/Mixily_LandingPage_KeyFeatures_D.png')} className="" alt='' />
                                    </div>
                                    <div className="pt-6 txt-regular">
                                        Modes for video chat, webinar, and broadcast
                                    </div>
                                    <div className="coming-soon justify-center">
                                        <div className="txt-width justify-center">Coming soon</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Icons  */}
                <div className="icons-body txt-28">
                    <div className="flex-grid grid3 icons">
                        <div className="icons-top">
                            <div className='justify-center'>
                                <img src={require('../assets/images/Mixily_LandingPage_Icon-01.svg')} className="icon9" alt="" />
                            </div>
                            <div className="pt-2 icon-txt txt-semi-bold">Audio and video chat up to 200 participants</div>
                        </div>
                        <div className="icons-top">
                            <div className='justify-center'>
                                <img src={require('../assets/images/Mixily_LandingPage_Icon-02.svg')} className="icon9" alt="" />
                            </div>
                            <div className="pt-2 icon-txt txt-semi-bold">Text chat with images, reactions, and moderators</div>
                        </div>
                        <div className="icons-top">
                            <div className='justify-center'>
                                <img src={require('../assets/images/Mixily_LandingPage_Icon-03.svg')} className="icon9" alt="" />
                            </div>
                            <div className="pt-2 icon-txt txt-semi-bold">Screen sharing</div>
                        </div>
                        <div className="icons-top">
                            <div className='justify-center'>
                                <img src={require('../assets/images/Mixily_LandingPage_Icon-04.svg')} className="icon9" alt="" />
                            </div>
                            <div className="pt-2 icon-txt txt-semi-bold">Breakout rooms</div>
                        </div>
                        <div className="icons-top">
                            <div className='justify-center'>
                                <img src={require('../assets/images/Mixily_LandingPage_Icon-19.svg')} className="icon9" alt="" />
                            </div>
                            <div className="pt-2 icon-txt txt-semi-bold">Speaker view + grid view</div>
                        </div>
                        <div className="icons-top">
                            <div className='justify-center'>
                                <img src={require('../assets/images/Mixily_LandingPage_Icon-07.svg')} className="icon9" alt="" />
                            </div>
                            <div className="pt-2 icon-txt txt-semi-bold">Livestream broadcasting</div>
                        </div>
                        <div className="icons-top">
                            <div className='justify-center'>
                                <img src={require('../assets/images/Mixily_LandingPage_Icon-08.svg')} className="icon9" alt="" />
                            </div>
                            <div className="pt-2 icon-txt txt-semi-bold">Guests can join without accounts</div>
                        </div>
                        <div className="icons-top">
                            <div className='justify-center'>
                                <img src={require('../assets/images/Mixily_LandingPage_Icon-09.svg')} className="icon9" alt="" />
                            </div>
                            <div className="pt-2 icon-txt txt-semi-bold">Guests can join without plug-ins or apps</div>
                        </div>
                        <div className="icons-top phone-icon-hide">
                            <div className='justify-center'>
                                <img src={require('../assets/images/Mixily_LandingPage_Icon-10.svg')} className="icon9" alt="" />
                            </div>
                            <div className="pt-2 icon-txt txt-semi-bold">Stellar customer support</div>
                        </div>
                    </div>
                    <div className="icons-top phone-icon-show">
                        <div className='justify-center'>
                            <img src={require('../assets/images/Mixily_LandingPage_Icon-10.svg')} className="icon9 phone" alt="" />
                        </div>
                        <div className="pt-2 icon-txt txt-semi-bold">Stellar customer support</div>
                    </div>
                </div>

                {/*  Text middle footer  */}
                <div className="bg-middle txt-40 white-color">
                    <div className="flex-grid grid3 txt-left grid-text">
                        <div>
                            <div className="">
                                "I started 2021 super stressed out about organizing my events, and now I'm excited and relieved!"
                            </div>
                            <div className="pt-20 txt-28 txt-medium">
                                <div>Marisa LaValette</div>
                                <div>Founder of Attune + Align</div>
                            </div>
                        </div>
                        <div>
                            <div className="">
                                "I started 2021 super stressed out about organizing my events, and now I'm excited and relieved!"
                            </div>
                            <div className="pt-20 txt-28 txt-medium">
                                <div>Marisa LaValette</div>
                                <div>Founder of Attune + Align</div>
                            </div>
                        </div>
                        <div>
                            <div className="">
                                "I started 2021 super stressed out about organizing my events, and now I'm excited and relieved!"
                            </div>
                            <div className="pt-20 txt-28 txt-medium">
                                <div>Marisa LaValette</div>
                                <div>Founder of Attune + Align</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*  Who loves us  */}
                <div className="who-body">
                    <div className="flex-left show1200">
                        <img src={require('../assets/images/screen-image8.png')} className="" alt='Virtual Venue' />
                    </div>
                    <div className="flex-grid grid24">
                        <div className="loves-mobile">
                            <div className="pt-20 txt-54 gray-color txt-semi-bold">Who loves us</div>
                            <div className="pt-5 flex-grid grid2 txt-26">
                                <div className="pt-20 txt-bold">
                                    <div className="justify-center">
                                        <img src={require('../assets/images/Mixily_LandingPage_Icon-11.png')} className="icon-loves" alt="" />
                                    </div>
                                    <div>Performing Arts</div>
                                </div>
                                <div className="pt-20 txt-bold">
                                    <div className="justify-center">
                                        <img src={require('../assets/images/Mixily_LandingPage_Icon-14.png')} className="icon-loves" alt="" />
                                    </div>
                                    <div>Classes</div>
                                </div>
                                <div className="pt-20 txt-bold">
                                    <div className="justify-center">
                                        <img src={require('../assets/images/Mixily_LandingPage_Icon-12.png')} className="icon-loves" alt="" />
                                    </div>
                                    <div>Exclusives</div>
                                </div>
                                <div className="pt-20 txt-bold">
                                    <div className="justify-center">
                                        <img src={require('../assets/images/Mixily_LandingPage_Icon-15.png')} className="icon-loves" alt="" />
                                    </div>
                                    <div>Readings</div>
                                </div>
                                <div className="pt-20 txt-bold">
                                    <div className="justify-center">
                                        <img src={require('../assets/images/Mixily_LandingPage_Icon-13.png')} className="icon-loves" alt="" />
                                    </div>
                                    <div>Social Clubs</div>
                                </div>
                                <div className="pt-20 txt-bold">
                                    <div className="justify-center">
                                        <img src={require('../assets/images/Mixily_LandingPage_Icon-16.png')} className="icon-loves" alt="" />
                                    </div>
                                    <div>Music</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-left hidden1200">
                            <img src={require('../assets/images/screen-image8.png')} className="" alt='Virtual Venue' />
                        </div>
                    </div>
                </div>

                {/*  Try it out  */}
                <Settings />

                {/*  Individual, Community, Enterprise  */}
                <div className="flex-grid grid30 white-color">
                    <div className="individual">
                        <div className="flex txt-54 pb-5 txt-semi-bold">Individual</div>
                        <div className="btn-white-border">
                            <div className="flex free txt-semi-bold">Free</div>
                        </div>
                        <div className="pt-10 txt-left">
                            <div>• Virtual Venue</div>
                            <div>• 1 room</div>
                            <div>• 20 participants</div>
                            <div>• Customize & embed</div>
                            <div>• Text chat with images, reactions, and moderation</div>
                            <div>• Screen sharing</div>
                            <div>• Speaker view</div>
                            <div>• Host can mute participants</div>
                            <div>• Mixily branding</div>
                            <div>&times; No recording</div>
                            <div>&times; No breakout rooms</div>
                            <div>&times; No OBS</div>
                            <div> </div>
                            <div className="pt-5 pb-20 pl-5">
                                <div>Ticketing</div>
                                <div>Standard fees</div>
                            </div>
                        </div>
                        <div className="pt-20 justify-center">
                            <div className="btn-sign btn-p txt-semi-bold mouse-cursor justify-center">SIGN UP</div>
                        </div>
                    </div>
                    <div className="community">
                        <div className="flex txt-54 pb-5 txt-semi-bold">Community</div>
                        <div className="btn-white-border txt-semi-bold">
                            <div className="flex">$30/mo, ~$290/yr</div>
                            <div className="flex txt-16">Early beta discounted rate $25/month</div>
                        </div>
                        <div className="pt-10 txt-left">
                            <div>• Virtual Venue</div>
                            <div>• 5 rooms</div>
                            <div>• 50 participants</div>
                            <div>• 14 day free trial</div>
                            <div>• 1 month free two-sided referral program</div>
                            <div>• No Mixily branding</div>
                            <div>• Recording</div>
                            <div>• Breakout rooms (soon)</div>
                            <div> </div>
                            <div className="pt-5 pb-20 pl-5">
                                <div>Ticketing</div>
                                <div>Standard fees</div>
                            </div>
                        </div>
                        <div className="pt-20 justify-center">
                            <div className="btn-sign btn-p txt-semi-bold mouse-cursor justify-center">SIGN UP</div>
                        </div>
                    </div>
                    <div className="enterprise">
                        <div className="flex txt-54 pb-5 txt-semi-bold">Enterprise</div>
                        <div className="btn-white-border">
                            <div className="flex custom txt-semi-bold">Custom</div>
                        </div>
                        <div className="pt-10 txt-left">
                            <div>• Virtual Venue</div>
                            <div>• Unlimited rooms</div>
                            <div>• 200 participants</div>
                            <div>• Exclusive access to new features</div>
                            <div>• Preferred support</div>
                            <div>• Dedicated account manager</div>
                            <div>• OBS or other professional broadcast streaming</div>
                            <div> </div>
                            <div className="pt-5 pb-20 pl-5">
                                <div>Ticketing</div>
                                <div>Custom fees</div>
                            </div>
                        </div>
                        <div className="pt-20 justify-center">
                            <div className="btn-sign btn-p txt-semi-bold mouse-cursor justify-center">CONTACT</div>
                        </div>
                    </div>
                </div>

                {/*  Click to expand examples  */}
                <div className="click-example-body slider-hidden">
                    <div className="pb-8 txt-24 txt-left gray-color txt-weight-500">Click to expand examples</div>
                    <div className="flex-grid grid3">
                        <div className="img-hover mouse-cursor">
                            <img src={require('../assets/images/screen-image9.png')} alt="" />
                        </div>
                        <div className="img-hover mouse-cursor">
                            <img src={require('../assets/images/screen-image10.png')} alt="" />
                        </div>
                        <div className="img-hover mouse-cursor">
                            <img src={require('../assets/images/screen-image11.png')} alt="" />
                        </div>
                    </div>
                </div>

                {/*  Text middle footer  */}
                <div className="bg-middle numbers txt-40 white-color">
                    <div className="flex-grid grid3 numbers">
                        <div className="phone-flex">
                            <div className="phone-left">
                                <div className="circle-number justify-center mouse-cursor">
                                    1
                                </div>
                                <div>
                                    <div className="pt-5 txt-80">
                                        Design
                                    </div>
                                    <div className="txt-34">
                                        custom venue
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <img src={require('../assets/images/Mixily_LandingPage_Icon-17.png')} className="number-icon account4" alt="" />
                            </div>
                        </div>
                        <div className="phone-flex">
                            <div className="phone-left">
                                <div className="circle-number justify-center mouse-cursor">
                                    2
                                </div>
                                <div>
                                    <div className="pt-5 txt-80">
                                        Embed
                                    </div>
                                    <div className="txt-34">
                                        into your own website
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <img src={require('../assets/images/Mixily_LandingPage_Icon-18.png')} className="number-icon account4" alt="" />
                            </div>
                        </div>
                        <div className="phone-flex">
                            <div className="phone-left">
                                <div className="circle-number justify-center mouse-cursor">
                                    3
                                </div>
                                <div>
                                    <div className="pt-5 txt-80">
                                        Gather
                                    </div>
                                    <div className="txt-34">
                                        your people
                                    </div>
                                </div>
                            </div>
                            <div className="pt-10">
                                <img src={require('../assets/images/Mixily_LandingPage_Icon-19.png')} className="number-icon account4" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="justify-center mouse-cursor pt-40">
                    <div className="btn-footer txt-80 txt-semi-bold justify-center">SIGN UP</div>
                </div>
                {/*  Footer  */}
                <div className="pt-20 bg-footer">
                    <div className="footer-p">
                        <div className="pt-20 txt-60">
                            {this.state.txt_footer}
                        </div>
                        <div
                            className="pt-20 txt-60 main-color mouse-cursor learn-more"
                            onClick={this.onLearnMore}
                        >
                            {
                                this.state.flag ?
                                    "Show more"
                                    :
                                    "Learn more"
                            }
                        </div>
                        <div className="pt-40 txt-40 phone-p">
                            <div>
                                <i className="far fa-copyright" aria-hidden="true"></i>
                                {new Date().getFullYear()} Mixily Inc.
                            </div>
                            <div>Contact: hi@mixily.com</div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default Home;
