// src/data/staffData.js
// スタッフデータを管理する専用ファイル
// 今後はこのファイルを編集するだけでスタッフの追加・変更・削除が可能

const staffData = [
  {
    id: 1,
    name: '山田 太郎',
    position: 'エンジニア',
    description: 'AIと教育の融合に取り組んでいます。',
    image: '/assets/images/RYO.png',
    hoverImage: '/assets/images/RYO_2.png'
  },
  {
    id: 2,
    name: '佐藤 花子',
    position: '教育コンサルタント',
    description: '教育現場での経験を活かし、学習システムの設計に携わっています。',
    image: 'https://placehold.jp/150x150.png',
    hoverImage: 'https://placehold.jp/3d4070/ffffff/150x150.png'
  },
  {
    id: 3,
    name: '鈴木 一郎',
    position: 'UI/UXデザイナー',
    description: '子どもたちが直感的に使えるインターフェースをデザインしています。',
    image: 'https://placehold.jp/7a91c7/ffffff/150x150.png',
    hoverImage: 'https://placehold.jp/4267b2/ffffff/150x150.png'
  },
  {
    id: 4,
    name: '高橋 結衣',
    position: 'コンテンツディレクター',
    description: '子どもたちが楽しく学べる教育コンテンツを企画・開発しています。',
    image: 'https://placehold.jp/e57b7b/ffffff/150x150.png',
    hoverImage: 'https://placehold.jp/c54545/ffffff/150x150.png'
  },
  {
    id: 5,
    name: '田中 誠',
    position: 'バックエンドエンジニア',
    description: '安定したシステム基盤の構築と最適化に取り組んでいます。',
    image: 'https://placehold.jp/79b06e/ffffff/150x150.png',
    hoverImage: 'https://placehold.jp/4d8c3f/ffffff/150x150.png'
  },
  {
    id: 6,
    name: '中村 優',
    position: 'データサイエンティスト',
    description: '学習データの分析と個別最適化アルゴリズムの開発を担当しています。',
    image: 'https://placehold.jp/9179b0/ffffff/150x150.png',
    hoverImage: 'https://placehold.jp/634d8c/ffffff/150x150.png'
  }
  
  // 新しいスタッフを追加する場合は、以下のテンプレートを使用してください
  /*
  {
    id: 7, // IDは必ず一意の番号にしてください
    name: '新しいスタッフの名前',
    position: '役職',
    description: '説明文をここに記入してください。',
    image: '通常時の画像パス', // 例: '/assets/images/staff7.png' または URL
    hoverImage: 'ホバー時の画像パス' // 例: '/assets/images/staff7_hover.png' または URL
  }
  */
];

export default staffData;