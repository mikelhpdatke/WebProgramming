import React from 'react';
import 'antd/dist/antd.css';
import styles from './doidep.less';
import { Carousel } from 'antd';
import { Typography } from 'antd';
const { Title, Text, Paragraph } = Typography;
import { Collapse } from 'antd';
const Panel = Collapse.Panel;
const text = `a) Để bảo đảm nhiệm vụ sẵn sàng chiến đấu;`;
const text2 = `b) Đang thực hiện nhiệm vụ phòng, chống thiên tai, dịch bệnh, cứu nạn, cứu hộ.`;

export default function() {
  // console.log(styles['ant-carousel']);
  return (
    <div className={styles.root}>
      <Collapse>
        <Panel header="Điều 8. Nghĩa vụ tham gia Công an nhân dân" key="1">
          <Collapse>
            <Panel
              header="1. Công dân thực hiện nghĩa vụ tham gia Công an nhân dân là thực hiện nghĩa vụ bảo vệ Tổ quốc trong lực lượng vũ trang nhân dân. Hằng năm, Công an nhân dân được tuyển chọn công dân trong độ tuổi gọi nhập ngũ vào phục vụ trong Công an nhân dân với thời hạn là 24 tháng. Bộ trưởng Bộ Công an quyết định kéo dài thời hạn phục vụ tại ngũ của hạ sĩ quan, chiến sĩ nghĩa vụ nhưng không quá 06 tháng trong trường hợp sau đây:"
              key="1"
            >
              <p>{text}</p>
              <p>{text2}</p>
            </Panel>
          </Collapse>
        </Panel>
      </Collapse>
    </div>
  );
}
