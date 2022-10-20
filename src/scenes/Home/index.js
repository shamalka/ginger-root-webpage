import { Typography, Input, Space, Divider } from 'antd';
import React from 'react';
import styles from "./styles.module.css";
import { useFormik } from 'formik';
import image1 from './../../images/img1.png'
import image2 from './../../images/img2.png'
import image3 from './../../images/img3.png'
import cookiePolicyImage from './../../images/cookiePolicy.png'

const { Title } = Typography;

function Home() {

    const formik = useFormik({
        initialValues: {
            name: '',
            lastName: ''
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

  return (
    <div style={{display:'flex'}}>
      <div style={{alignItems:"left", marginLeft:40, textAlign:'left'}}>
        <Title level={5} style={{marginTop: 20}}>Ginger Root</Title>
        <Title level={5} style={{marginTop:40, color:"rgb(255 172 40)"}}>View the mainsite</Title>
        <p style={{fontSize:50, fontWeight:'bold'}}>
            Hello,
            <br/>
            Ready to create amazing?
        </p>
        <p style={{fontSize:40, fontFamily:'initial'}}>
            We’ve put together a few ideas below, to show what we could make together.
        </p>
        <img src={image1} alt="Logo" width="100%"/>
        <p style={{fontSize:40, fontFamily:'initial', marginTop:20, marginBottom:10}}>
            Heading
        </p>
        <p style={{fontFamily:'initial', fontSize:20}}>
        Placeholder text goes here as a big paragraph describing the project;
        <br/>
        what we think, why we’ve chosen this, why we’re recommending this,
        <br/>
        and scope for how it could develop...
        </p>
        <div style={{display:'flex', alignItems:'stretch', marginTop: 30}}>
            <div>
                <img src={image2} alt="Logo" width="100%"/>
                <p style={{fontSize:40, fontFamily:'initial', marginTop:20, marginBottom:10}}>
                    Heading
                </p>
                <p style={{fontFamily:'initial', fontSize:20}}>
                Placeholder text goes here as a big paragraph describing the project;
                <br/>
                what we think, why we’ve chosen this, why we’re recommending this,
                <br/>
                and scope for how it could develop...
                </p>
            </div>
            <div style={{marginLeft:20}}>
                <img src={image3} alt="Logo" width="100%"/>
                <p style={{fontSize:40, fontFamily:'initial', marginTop:20, marginBottom:10}}>
                    Heading
                </p>
                <p style={{fontFamily:'initial', fontSize:20}}>
                Placeholder text goes here as a big paragraph describing the project;
                <br/>
                what we think, why we’ve chosen this, why we’re recommending this,
                <br/>
                and scope for how it could develop...
                </p>
            </div>
        </div>
        <div style={{height:600, backgroundColor:'rgb(255 172 40)', marginTop:30}}>
            <div>
                <p style={{fontSize:50, fontWeight:'bold', color:'#fff', marginLeft: 100, paddingTop:40}}>
                        We’d love to work with you.
                </p>
                <div style={{justifyContent:'center', display:'flex'}}>
                    <form onSubmit={formik.handleSubmit}>
                        <Space direction="vertical" size={25}>
                            <Space direction="vertical" size={25} style={{width:500}}>
                                <input 
                                    id="name" 
                                    name="name" 
                                    className={styles.inputField} 
                                    type="text" placeholder={"Name"} 
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                                <input 
                                    id="lastName" 
                                    name="lastName" 
                                    className={styles.inputField} 
                                    type="text" 
                                    placeholder={"Last Name"} 
                                    onChange={formik.handleChange}
                                    value={formik.values.lastName}
                                />
                                <input 
                                    id="company" 
                                    name="company" 
                                    className={styles.inputField} 
                                    type="text" 
                                    placeholder={"Company"} 
                                    onChange={formik.handleChange}
                                    value={formik.values.company}
                                />
                                <input 
                                    id="country" 
                                    name="country" 
                                    className={styles.inputField} 
                                    type="text" 
                                    placeholder={"Country"} 
                                    onChange={formik.handleChange}
                                    value={formik.values.country}
                                />
                                <input 
                                    id="email" 
                                    name="email" 
                                    className={styles.inputField} 
                                    type="text" 
                                    placeholder={"Email Address"} 
                                    onChange={formik.handleChange}
                                    value={formik.values.email}
                                />
                            </Space>
                            <div style={{display:'flex', justifyContent:'right'}}>
                                <button className={styles.submitButton}  type="submit">Send</button>
                            </div>
                        </Space>
                    </form>
                </div>
            </div>
        </div>
        <Divider orientation="left" orientationMargin="0" style={{marginLeft:30, marginTop: 30}}>
            Wow, you got this far, huh?
        </Divider>
        <div style={{display:'flex', justifyContent:'space-between', marginTop: 40, marginBottom:30}}>
            <div>
                <p style={{fontFamily:'initial', fontSize:20}}>
                    @2022 Ginger Roor Ltd
                    <br/>
                    Creative House, Chase Park,
                    <br/>
                    Nottingham, NG2 4GT
                </p>
            </div>
            <div>
                <p style={{fontFamily:'initial', fontSize:20}}>
                    0115 88 00 181
                </p>
            </div>
            <div>
                <p style={{fontFamily:'initial', fontSize:20}}>
                    Job Vacancies
                    <br/>
                    Privacy Policy
                    <br/>
                    Cookie Policy
                </p>
            </div>
            <div>
                <p style={{fontFamily:'initial', fontSize:20}}>
                    Twitter
                    <br/>
                    LinkedIn
                    <br/>
                    Instagram
                </p>
            </div>
            <div>
                <img src={cookiePolicyImage} alt="Logo" width="100%"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
