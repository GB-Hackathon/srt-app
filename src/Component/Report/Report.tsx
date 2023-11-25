import { useCallback, useRef } from 'react'
import style from './Report.module.css'
import Webcam from 'react-webcam'
import axios from 'axios'
import { Webhook, MessageBuilder } from 'discord-webhook-node'
import { Link } from 'react-router-dom'

const Report: React.FC = () => {
  const webcam: any = useRef()
  const hook = new Webhook('https://discord.com/api/webhooks/1177657247300595774/jaEUc1iyGa2oCpPDZiym4gJMmaxI_Gu-d8yVyu7-zQsWdOwdxMHIHxovJhhuAkVSftUT')
  let constraints = {
    facingMode: { exact: 'user' },
  }

  const getCapture = useCallback(() => {
    const img = webcam.current.getScreenshot()
    console.log(img)

    axios
      .post(
        '/api/eme',
        { image: img.split(',')[1] },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      )
      .then((resp) => {
        console.log(resp)

        const embed = new MessageBuilder()
          .setTitle('성민이 발생 신고')
          .setAuthor('바보성민')
          .addField('경소고 기숙사', '바보 성민', true)
          .setColor('#00b0f4')
          .setThumbnail('https://cdn.discordapp.com/embed/avatars/0.png')
          // .setDescription('Oh look a description :)')
          // .setImage('https://cdn.discordapp.com/embed/avatars/0.png')
          // .setFooter('Hey its a footer', 'https://cdn.discordapp.com/embed/avatars/0.png')
          .setTimestamp()

        hook.send(embed)
      })
  }, [webcam])

  return (
    <div className={style.report_inner}>
      <div className={style.login_back}>
        <Link className={style.back_btn} to='/' style={{ textDecoration: 'none' }}>
          <img src='src\assets\back.png' alt='' />
        </Link>
        <div className={style.login_back_title}>신고하기</div>
      </div>
      <div className={style.report_cam_container}>
        <div className={style.report_cambox}>
          <Webcam videoConstraints={constraints} mirrored={true} disablePictureInPicture={true} className='webcam' ref={webcam} />
        </div>
        <div className={style.report_btnbox}>
          <div className={style.report_album} />
          <button className={style.report_submit} onClick={getCapture}></button>
          <div className={style.report_switch_camera} />
        </div>
      </div>
    </div>
  )
}

export default Report
