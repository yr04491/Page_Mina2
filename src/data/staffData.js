// src/data/staffData.js
// スタッフデータを管理する専用ファイル
// 今後はこのファイルを編集するだけでスタッフの追加・変更・削除が可能

const staffData = [
  {
    id: 1,
    name: '山田 太郎',
    romaji: 'YAMADA Taro',
    position: 'エンジニア',
    description: 'AIと教育の融合に取り組んでいます。',
    longDescription: '森永乳業に新卒入社し、医療・介護施設をターゲットとした医療・介護食の営業に従事。続いてレシピサイトを運営するITベンチャーに入社し、社員向け未来のフェーリーフェーズにおいて戦略開拓、営業手法の確立に注力する。その後コーポレートウェルネス領域におけるエンタープライズ企業向けBPaaS事業のアカウントセールス・カスタマーサクセス部門/事業開発の責任者を歴任。2023年12月に株式会社Minakonoに入社し、現在はカスタマーサクセス部門を管掌している。',
    image: '/assets/images/RYO.png',
    hoverImage: '/assets/images/RYO_2.png',
    socialLinks: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/',
      facebook: 'https://facebook.com/'
    },
    relatedArticles: [
      {
        title: '入社エントリ | 不惑を目前に熱狂を求めてMinakonoに入社しました',
        url: '#'
      },
      {
        title: '那須での暮らしをベースに自律的に生きる【チャレンジな転職ビフォーアフター 〜Minakono 赤井北斗さん編〜】',
        url: '#'
      }
    ]
  },
  {
    id: 2,
    name: '佐藤 花子',
    romaji: 'SATO Hanako',
    position: '教育コンサルタント',
    description: '教育現場での経験を活かし、学習システムの設計に携わっています。',
    longDescription: '10年間の学校教育現場での経験を持ち、特に特別支援教育に携わってきました。子どもたち一人ひとりの特性や学習スタイルを理解し、最適な学習環境を設計することを得意としています。Minakonoでは、AIを活用した個別最適化学習プラットフォームの開発に携わり、すべての子どもたちが自分のペースで学べる環境づくりを推進しています。',
    image: 'https://placehold.jp/150x150.png',
    hoverImage: 'https://placehold.jp/3d4070/ffffff/150x150.png',
    socialLinks: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/'
    },
    relatedArticles: [
      {
        title: '教育とテクノロジーの融合 - これからの学びを考える',
        url: '#'
      }
    ]
  },
  {
    id: 3,
    name: '鈴木 一郎',
    romaji: 'SUZUKI Ichiro',
    position: 'UI/UXデザイナー',
    description: '子どもたちが直感的に使えるインターフェースをデザインしています。',
    longDescription: 'ユーザー中心設計の理念に基づき、特に子どもたちが直感的に操作できるインターフェースデザインを専門としています。これまで多数の教育アプリや子ども向けデジタルコンテンツのデザインに携わってきました。Minakonoでは、年齢や学習スタイルの異なる子どもたちが等しく利用できる、アクセシブルで魅力的なUI/UXの開発をリードしています。',
    image: 'https://placehold.jp/7a91c7/ffffff/150x150.png',
    hoverImage: 'https://placehold.jp/4267b2/ffffff/150x150.png',
    socialLinks: {
      twitter: 'https://twitter.com/',
      facebook: 'https://facebook.com/'
    }
  },
  {
    id: 4,
    name: '高橋 結衣',
    romaji: 'TAKAHASHI Yui',
    position: 'コンテンツディレクター',
    description: '子どもたちが楽しく学べる教育コンテンツを企画・開発しています。',
    longDescription: '教育出版社での勤務経験を持ち、小・中学生向けの教材開発に10年以上携わってきました。子どもたちの好奇心を刺激し、自ら学ぶ意欲を引き出すコンテンツ作りを得意としています。Minakonoでは、AIと教育コンテンツを融合させた新しい学習体験の創造に取り組んでいます。',
    image: 'https://placehold.jp/e57b7b/ffffff/150x150.png',
    hoverImage: 'https://placehold.jp/c54545/ffffff/150x150.png',
    socialLinks: {
      linkedin: 'https://linkedin.com/'
    }
  },
  {
    id: 5,
    name: '田中 誠',
    romaji: 'TANAKA Makoto',
    position: 'バックエンドエンジニア',
    description: '安定したシステム基盤の構築と最適化に取り組んでいます。',
    longDescription: '大規模Webサービスのバックエンド開発経験を持ち、特にスケーラブルなシステム設計とパフォーマンス最適化を専門としています。Minakonoでは、多数の子どもたちが同時に利用しても安定して動作する学習プラットフォームの技術基盤を担当し、安全性と拡張性を両立したシステム構築に力を注いでいます。',
    image: 'https://placehold.jp/79b06e/ffffff/150x150.png',
    hoverImage: 'https://placehold.jp/4d8c3f/ffffff/150x150.png',
    socialLinks: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/'
    }
  },
  {
    id: 6,
    name: '中村 優',
    romaji: 'NAKAMURA Yu',
    position: 'データサイエンティスト',
    description: '学習データの分析と個別最適化アルゴリズムの開発を担当しています。',
    longDescription: '機械学習と教育工学の知見を活かし、子どもたちの学習パターンを分析して最適な学習体験を提供するアルゴリズム開発に従事しています。Minakonoでは、一人ひとりの学習速度や理解度に合わせてコンテンツを最適化する推薦システムの構築を担当し、真の意味で個別最適化された学びの実現に取り組んでいます。',
    image: 'https://placehold.jp/9179b0/ffffff/150x150.png',
    hoverImage: 'https://placehold.jp/634d8c/ffffff/150x150.png',
    socialLinks: {
      twitter: 'https://twitter.com/',
      linkedin: 'https://linkedin.com/',
      facebook: 'https://facebook.com/'
    }
  }
  
  // 新しいスタッフを追加する場合は、以下のテンプレートを使用してください
  /*
  {
    id: 7, // IDは必ず一意の番号にしてください
    name: '新しいスタッフの名前',
    romaji: 'SHIN Romaji', // ローマ字表記（任意）
    position: '役職',
    description: '説明文をここに記入してください。', // カード表示用の短い説明
    longDescription: '詳細なプロフィールや経歴をここに記入してください。', // モーダル表示用の詳細説明
    image: '通常時の画像パス', // 例: '/assets/images/staff7.png' または URL
    hoverImage: 'ホバー時の画像パス', // 例: '/assets/images/staff7_hover.png' または URL
    socialLinks: { // ソーシャルメディアリンク（任意）
      twitter: 'https://twitter.com/username',
      linkedin: 'https://linkedin.com/in/username',
      facebook: 'https://facebook.com/username'
    },
    relatedArticles: [ // 関連記事（任意）
      {
        title: '記事タイトル',
        url: '記事URL'
      }
    ]
  }
  */
];

export default staffData;