import { useCallback, useRef } from 'react'
import './Report.css'
import Webcam from 'react-webcam'
import axios from 'axios'
import { Webhook, MessageBuilder } from 'discord-webhook-node'

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
    <div className='report_inner'>
      <div className='report_cam-container'>
        <div className='report_cambox'>
          <Webcam videoConstraints={constraints} mirrored={true} disablePictureInPicture={true} className='webcam' ref={webcam} />
        </div>
        <div className='report_btnbox'>
          <div className='report_album' />
          <button className='report_submit' onClick={getCapture}></button>
          <div className='report_switch-camera' />
        </div>
      </div>
    </div>
  )
}

export default Report
