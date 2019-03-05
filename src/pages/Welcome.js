import React from 'react';
import { List, Avatar, Tag } from 'antd';
import hammerLogo from '@/assets/hammer.jpg';
import Link from 'umi/link';
import styles from './globalStyle.less';

const data = [
  {
    title: 'CHƯƠNG I',
    subTitle: 'QUY ĐỊNH CHUNG',
    link: 'chuong1/1',
  },
  {
    title: 'CHƯƠNG II',
    subTitle: 'CHỨC NĂNG, NHIỆM VỤ VÀ QUYỀN HẠN CỦA CÔNG AN NHÂN DÂN',
    link: 'chuong2/15',
  },
  {
    title: 'CHƯƠNG III',
    subTitle: 'TỔ CHỨC CỦA CÔNG AN NHÂN DÂN',
    link: 'chuong3/17',
  },
  {
    title: 'CHƯƠNG IV',
    subTitle: 'SĨ QUAN, HẠ SĨ QUAN, CHIẾN SĨ CÔNG AN NHÂN DÂN',
    link: 'chuong4/20',
  },
  {
    title: 'CHƯƠNG V',
    subTitle: 'BẢO ĐẢM ĐIỀU KIỆN HOẠT ĐỘNG VÀ CHẾ ĐỘ, CHÍNH SÁCH ĐỐI VỚI CÔNG AN NHÂN DÂN',
    link: 'chuong5/33',
  },
  {
    title: 'CHƯƠNG VI',
    subTitle: 'KHEN THƯỞNG VÀ XỬ LÝ VI PHẠM',
    link: 'chuong6/43',
  },
];

export default props => (
  <div className={styles.root}>
    <p className={styles.title}>LUẬT CÔNG AN NHÂN DÂN</p>

    <List
      bordered
      itemLayout="horizontal"
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            avatar={<Avatar src={hammerLogo} />}
            title={<Link to={item.link}>{item.title}</Link>}
            description={item.subTitle}
          />
        </List.Item>
      )}
    />
  </div>
);
