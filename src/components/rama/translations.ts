import type { InvitationLocale } from '@/lib/invitation-locale'

export type RamaLocale = InvitationLocale

export type RamaTranslation = {
  localeName: string
  language: string
  montageCaption: string
  introPhotoAlt: (groom: string, bride: string) => string
  couplePhotoAlt: (groom: string, bride: string) => string
  preweddingPhotoAlt: (groom: string, bride: string, index: number) => string
  galleryPhotoAlt: (groom: string, bride: string, index: number) => string
  splashInvitation: string
  coverEyebrow: string
  dearGuest: string
  openInvitation: string
  musicOn: string
  musicOff: string
  heroCeremony: string
  heroEyebrow: string
  explore: string
  ceremonialGreeting: string
  welcomeTitle: string
  welcomeCopy: string
  coupleKicker: string
  coupleTitle: string
  groom: string
  bride: string
  groomChildOrder: string
  brideChildOrder: string
  saveDate: string
  happyDay: string
  onwards: string
  countdownLabel: string
  days: string
  hours: string
  minutes: string
  seconds: string
  viewLocation: string
  calendarTitle: (groom: string, bride: string) => string
  calendarDescription: (groom: string, bride: string) => string
  galleryKicker: string
  galleryTitle: string
  galleryDescription: string
  galleryHint: string
  galleryLabel: string
  openPhoto: string
  previousPhoto: string
  nextPhoto: string
  closeGallery: string
  giftKicker: string
  giftTitle: string
  giftDescription: string
  digitalEnvelope: string
  bankAccount: string
  accountHolder: string
  copyAccount: string
  physicalGift: string
  giftRecipient: string
  shippingAddress: string
  copyAddress: string
  copied: string
  giftThanks: string
  rsvpKicker: string
  rsvpTitle: string
  rsvpDescription: string
  fullName: string
  yourName: string
  whatsapp: string
  optional: string
  attendanceQuestion: string
  attending: string
  notAttending: string
  unsure: string
  wishes: string
  wishesPlaceholder: string
  sending: string
  submit: string
  submitSuccess: string
  submitError: string
  defaultMessage: string
  confirmationsKicker: string
  confirmationsTitle: string
  confirmationsDescription: string
  statusAttending: string
  statusNotAttending: string
  statusUnsure: string
  confirmationsPagination: string
  previous: string
  next: string
  footerMessage: string
  madeWithLove: string
}

export const ramaTranslations: Record<RamaLocale, RamaTranslation> = {
  id: {
    localeName: 'Indonesia',
    language: 'Ganti bahasa',
    montageCaption: 'A glimpse of us',
    introPhotoAlt: (groom, bride) => `Kilas momen ${groom} dan ${bride}`,
    couplePhotoAlt: (groom, bride) => `${groom} dan ${bride}`,
    preweddingPhotoAlt: (groom, bride, index) => `Foto prewedding ${groom} dan ${bride} ${index}`,
    galleryPhotoAlt: (groom, bride, index) => `Momen ${groom} dan ${bride} ${index}`,
    splashInvitation: 'Wedding invitation of',
    coverEyebrow: 'The wedding of',
    dearGuest: 'Kepada Yth.',
    openInvitation: 'Buka Undangan',
    musicOn: 'Matikan musik',
    musicOff: 'Putar musik',
    heroCeremony: 'Pawiwahan',
    heroEyebrow: 'The wedding celebration of',
    explore: 'Explore',
    ceremonialGreeting: 'ᬒᬁ ᬲ᭄ᬯᬲ᭄ᬢ᭄ᬬᬲ᭄ᬢᬸ',
    welcomeTitle: 'A quiet promise,\na lifetime together.',
    welcomeCopy: 'Atas Asung Kertha Wara Nugraha Ida Sang Hyang Widhi Wasa, kami bermaksud menyelenggarakan upacara pawiwahan kami. Dengan penuh sukacita, kami mengundang Bapak/Ibu/Saudara/i untuk hadir dan memberikan doa restu.',
    coupleKicker: 'The Couple',
    coupleTitle: 'Meet the couple',
    groom: 'The Groom',
    bride: 'The Bride',
    groomChildOrder: 'Anak kelima dari',
    brideChildOrder: 'Anak pertama dari',
    saveDate: 'Save our date',
    happyDay: 'Hari Bahagia Kami',
    onwards: 'selesai',
    countdownLabel: 'Hitung mundur hari pernikahan',
    days: 'Hari',
    hours: 'Jam',
    minutes: 'Menit',
    seconds: 'Detik',
    viewLocation: 'Lihat Lokasi',
    calendarTitle: (groom, bride) => `Pawiwahan ${groom} & ${bride}`,
    calendarDescription: (groom, bride) => `Pawiwahan ${groom} dan ${bride}`,
    galleryKicker: 'A glimpse of us',
    galleryTitle: 'Our moments',
    galleryDescription: 'A few frames from our story.',
    galleryHint: 'Geser untuk melihat semua foto',
    galleryLabel: 'Galeri foto yang dapat digeser',
    openPhoto: 'Buka foto',
    previousPhoto: 'Foto sebelumnya',
    nextPhoto: 'Foto berikutnya',
    closeGallery: 'Tutup galeri',
    giftKicker: 'Tanda kasih',
    giftTitle: 'Amplop Digital & Gift',
    giftDescription: 'Doa restu Anda adalah hadiah terindah bagi kami. Namun, apabila berkenan memberikan tanda kasih, dapat disampaikan melalui pilihan berikut.',
    digitalEnvelope: 'Amplop Digital',
    bankAccount: 'Nomor rekening',
    accountHolder: 'Atas nama',
    copyAccount: 'Salin nomor rekening',
    physicalGift: 'Kirim Gift',
    giftRecipient: 'Penerima',
    shippingAddress: 'Alamat Pengiriman',
    copyAddress: 'Salin alamat',
    copied: 'Tersalin',
    giftThanks: 'Terima kasih atas doa, perhatian, dan tanda kasih yang diberikan.',
    rsvpKicker: 'Kindly respond',
    rsvpTitle: 'Konfirmasi Kehadiran',
    rsvpDescription: 'Kehadiran dan doa restu Anda merupakan hadiah terindah bagi kami.',
    fullName: 'Nama lengkap',
    yourName: 'Nama Anda',
    whatsapp: 'Nomor WhatsApp',
    optional: 'opsional',
    attendanceQuestion: 'Apakah Anda akan hadir?',
    attending: 'Hadir',
    notAttending: 'Tidak hadir',
    unsure: 'Belum tahu',
    wishes: 'Pesan dan doa',
    wishesPlaceholder: 'Tuliskan doa terbaik untuk kami',
    sending: 'Mengirim...',
    submit: 'Kirim Konfirmasi',
    submitSuccess: 'Terima kasih, konfirmasi Anda sudah kami terima.',
    submitError: 'Konfirmasi belum berhasil dikirim. Silakan coba beberapa saat lagi.',
    defaultMessage: 'Terima kasih atas undangannya. Turut berbahagia untuk',
    confirmationsKicker: 'Words from our loved ones',
    confirmationsTitle: 'Ucapan & Konfirmasi',
    confirmationsDescription: 'Terima kasih untuk setiap doa yang menyertai perjalanan kami.',
    statusAttending: 'Akan hadir',
    statusNotAttending: 'Tidak dapat hadir',
    statusUnsure: 'Belum memastikan',
    confirmationsPagination: 'Halaman ucapan dan konfirmasi',
    previous: 'Sebelumnya',
    next: 'Berikutnya',
    footerMessage: 'Merupakan suatu kehormatan bagi kami apabila Anda berkenan hadir dan memberikan doa restu.',
    madeWithLove: 'Made with love by',
  },
  en: {
    localeName: 'English',
    language: 'Change language',
    montageCaption: 'A glimpse of us',
    introPhotoAlt: (groom, bride) => `A glimpse of ${groom} and ${bride}`,
    couplePhotoAlt: (groom, bride) => `${groom} and ${bride}`,
    preweddingPhotoAlt: (groom, bride, index) => `Pre-wedding portrait of ${groom} and ${bride}, frame ${index}`,
    galleryPhotoAlt: (groom, bride, index) => `${groom} and ${bride}, moment ${index}`,
    splashInvitation: 'Wedding invitation of',
    coverEyebrow: 'The wedding of',
    dearGuest: 'Dear',
    openInvitation: 'Open Invitation',
    musicOn: 'Turn music off',
    musicOff: 'Play music',
    heroCeremony: 'Wedding Ceremony',
    heroEyebrow: 'The wedding celebration of',
    explore: 'Explore',
    ceremonialGreeting: 'Together with our families',
    welcomeTitle: 'A quiet promise,\na lifetime together.',
    welcomeCopy: 'Together with our families, we joyfully invite you to celebrate our marriage. It would mean so much to share this special day with you and receive your warm wishes.',
    coupleKicker: 'The Couple',
    coupleTitle: 'Meet the couple',
    groom: 'The Groom',
    bride: 'The Bride',
    groomChildOrder: 'The fifth son of',
    brideChildOrder: 'The first daughter of',
    saveDate: 'Save our date',
    happyDay: 'Our Special Day',
    onwards: 'onwards',
    countdownLabel: 'Countdown to our wedding day',
    days: 'Days',
    hours: 'Hours',
    minutes: 'Minutes',
    seconds: 'Seconds',
    viewLocation: 'View Location',
    calendarTitle: (groom, bride) => `Wedding of ${groom} & ${bride}`,
    calendarDescription: (groom, bride) => `Wedding celebration of ${groom} and ${bride}`,
    galleryKicker: 'A glimpse of us',
    galleryTitle: 'Our moments',
    galleryDescription: 'A few frames from our story.',
    galleryHint: 'Swipe to see all photos',
    galleryLabel: 'Swipeable photo gallery',
    openPhoto: 'Open photo',
    previousPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
    closeGallery: 'Close gallery',
    giftKicker: 'A token of love',
    giftTitle: 'Digital Envelope & Gift',
    giftDescription: 'Your prayers and blessings are the greatest gift to us. Should you wish to send another token of love, you may use one of the options below.',
    digitalEnvelope: 'Digital Envelope',
    bankAccount: 'Account number',
    accountHolder: 'Account holder',
    copyAccount: 'Copy account number',
    physicalGift: 'Send a Gift',
    giftRecipient: 'Recipient',
    shippingAddress: 'Shipping Address',
    copyAddress: 'Copy address',
    copied: 'Copied',
    giftThanks: 'Thank you for your prayers, kindness, and thoughtful gift.',
    rsvpKicker: 'Kindly respond',
    rsvpTitle: 'RSVP',
    rsvpDescription: 'Your presence and blessings would be the most beautiful gift to us.',
    fullName: 'Full name',
    yourName: 'Your name',
    whatsapp: 'WhatsApp number',
    optional: 'optional',
    attendanceQuestion: 'Will you be attending?',
    attending: 'Attending',
    notAttending: 'Unable to attend',
    unsure: 'Not sure yet',
    wishes: 'Message and wishes',
    wishesPlaceholder: 'Leave your best wishes for us',
    sending: 'Sending...',
    submit: 'Send Confirmation',
    submitSuccess: 'Thank you, we have received your confirmation.',
    submitError: 'Your confirmation could not be sent. Please try again shortly.',
    defaultMessage: 'Thank you for the invitation. So happy for',
    confirmationsKicker: 'Words from our loved ones',
    confirmationsTitle: 'Wishes & Confirmations',
    confirmationsDescription: 'Thank you for every prayer and wish that accompanies our journey.',
    statusAttending: 'Will attend',
    statusNotAttending: 'Unable to attend',
    statusUnsure: 'Not confirmed yet',
    confirmationsPagination: 'Wishes and confirmations pages',
    previous: 'Previous',
    next: 'Next',
    footerMessage: 'It would be an honour to have you join us and bless our celebration with your presence.',
    madeWithLove: 'Made with love by',
  },
  yue: {
    localeName: '粵語',
    language: '切換語言',
    montageCaption: '我哋嘅片段',
    introPhotoAlt: (groom, bride) => `${groom} 同 ${bride} 嘅珍貴片段`,
    couplePhotoAlt: (groom, bride) => `${groom} 同 ${bride}`,
    preweddingPhotoAlt: (groom, bride, index) => `${groom} 同 ${bride} 嘅婚前相片 ${index}`,
    galleryPhotoAlt: (groom, bride, index) => `${groom} 同 ${bride} 嘅珍貴時刻 ${index}`,
    splashInvitation: '誠邀您出席婚禮',
    coverEyebrow: '我哋嘅婚禮',
    dearGuest: '敬邀',
    openInvitation: '打開喜帖',
    musicOn: '關閉音樂',
    musicOff: '播放音樂',
    heroCeremony: '婚禮',
    heroEyebrow: '誠邀您見證我哋嘅婚禮',
    explore: '細看',
    ceremonialGreeting: '誠邀您蒞臨見證',
    welcomeTitle: '一個溫柔嘅承諾，\n一生相伴。',
    welcomeCopy: '我哋即將舉行婚禮，誠意邀請您蒞臨見證，同我哋一齊分享呢個重要時刻。您嘅到來與祝福，對我哋意義重大。',
    coupleKicker: '一對新人',
    coupleTitle: '認識我哋',
    groom: '新郎',
    bride: '新娘',
    groomChildOrder: '家中第五子，父母為',
    brideChildOrder: '家中長女，父母為',
    saveDate: '留低日子',
    happyDay: '我哋嘅大日子',
    onwards: '開始',
    countdownLabel: '婚禮倒數',
    days: '日',
    hours: '小時',
    minutes: '分鐘',
    seconds: '秒',
    viewLocation: '查看地點',
    calendarTitle: (groom, bride) => `${groom} 與 ${bride} 嘅婚禮`,
    calendarDescription: (groom, bride) => `誠邀您出席 ${groom} 與 ${bride} 嘅婚禮`,
    galleryKicker: '我哋嘅片段',
    galleryTitle: '珍貴時刻',
    galleryDescription: '我哋故事入面嘅幾個畫面。',
    galleryHint: '左右滑動睇晒所有相片',
    galleryLabel: '可滑動相片集',
    openPhoto: '打開相片',
    previousPhoto: '上一張相',
    nextPhoto: '下一張相',
    closeGallery: '關閉相片集',
    giftKicker: '一份心意',
    giftTitle: '電子禮金與禮物',
    giftDescription: '您嘅祝福已經係我哋最珍貴嘅禮物。如果您想送上一份心意，可以選擇以下方式。',
    digitalEnvelope: '電子禮金',
    bankAccount: '銀行帳戶號碼',
    accountHolder: '戶口持有人',
    copyAccount: '複製帳戶號碼',
    physicalGift: '寄送禮物',
    giftRecipient: '收件人',
    shippingAddress: '寄送地址',
    copyAddress: '複製地址',
    copied: '已複製',
    giftThanks: '多謝您嘅祝福、關心同心意。',
    rsvpKicker: '敬請回覆',
    rsvpTitle: '出席確認',
    rsvpDescription: '您嘅蒞臨同祝福，就係我哋最珍貴嘅禮物。',
    fullName: '姓名',
    yourName: '您嘅姓名',
    whatsapp: 'WhatsApp 號碼',
    optional: '選填',
    attendanceQuestion: '您會唔會出席？',
    attending: '會出席',
    notAttending: '未能出席',
    unsure: '未確定',
    wishes: '留言同祝福',
    wishesPlaceholder: '留低您對我哋嘅祝福',
    sending: '傳送中...',
    submit: '提交確認',
    submitSuccess: '多謝您，我哋已收到您嘅回覆。',
    submitError: '暫時未能送出回覆，請稍後再試。',
    defaultMessage: '多謝您嘅邀請，衷心祝福',
    confirmationsKicker: '親友嘅祝福',
    confirmationsTitle: '祝福與出席確認',
    confirmationsDescription: '多謝每一份陪伴我哋旅程嘅祝福。',
    statusAttending: '會出席',
    statusNotAttending: '未能出席',
    statusUnsure: '尚未確認',
    confirmationsPagination: '祝福與確認分頁',
    previous: '上一頁',
    next: '下一頁',
    footerMessage: '如果您能夠蒞臨見證並送上祝福，將會係我哋莫大嘅榮幸。',
    madeWithLove: '用愛製作：',
  },
  ja: {
    localeName: '日本語',
    language: '言語を変更',
    montageCaption: 'ふたりの軌跡',
    introPhotoAlt: (groom, bride) => `${groom}と${bride}の思い出`,
    couplePhotoAlt: (groom, bride) => `${groom}と${bride}`,
    preweddingPhotoAlt: (groom, bride, index) => `${groom}と${bride}の前撮り写真 ${index}`,
    galleryPhotoAlt: (groom, bride, index) => `${groom}と${bride}の思い出 ${index}`,
    splashInvitation: '結婚式のご案内',
    coverEyebrow: '私たちの結婚式',
    dearGuest: '謹んでご招待申し上げます',
    openInvitation: '招待状を開く',
    musicOn: '音楽を停止',
    musicOff: '音楽を再生',
    heroCeremony: '結婚式',
    heroEyebrow: '私たちの門出を見守ってください',
    explore: 'ご案内を見る',
    ceremonialGreeting: '謹んでご案内申し上げます',
    welcomeTitle: '静かな誓いを、\n永遠の約束へ。',
    welcomeCopy: 'このたび、私たちは結婚式を挙げることとなりました。日頃お世話になっている皆さまと喜びのひとときを過ごしたく、謹んでご案内申し上げます。',
    coupleKicker: '新郎新婦',
    coupleTitle: '私たちについて',
    groom: '新郎',
    bride: '新婦',
    groomChildOrder: '第五子',
    brideChildOrder: '長女',
    saveDate: '日程のご案内',
    happyDay: '私たちの特別な日',
    onwards: 'より',
    countdownLabel: '結婚式までのカウントダウン',
    days: '日',
    hours: '時間',
    minutes: '分',
    seconds: '秒',
    viewLocation: '会場を見る',
    calendarTitle: (groom, bride) => `${groom}と${bride}の結婚式`,
    calendarDescription: (groom, bride) => `${groom}と${bride}の結婚式のご案内`,
    galleryKicker: 'ふたりの軌跡',
    galleryTitle: '思い出',
    galleryDescription: '私たちの物語を彩る、いくつかの瞬間。',
    galleryHint: 'スワイプしてすべての写真を見る',
    galleryLabel: 'スワイプできるフォトギャラリー',
    openPhoto: '写真を開く',
    previousPhoto: '前の写真',
    nextPhoto: '次の写真',
    closeGallery: 'ギャラリーを閉じる',
    giftKicker: '感謝のしるし',
    giftTitle: '送金・贈り物のご案内',
    giftDescription: '皆さまからの祝福が、私たちにとって何よりの贈り物です。お気持ちをお寄せくださる場合は、以下をご利用ください。',
    digitalEnvelope: 'お振込先',
    bankAccount: '口座番号',
    accountHolder: '口座名義',
    copyAccount: '口座番号をコピー',
    physicalGift: '贈り物を送る',
    giftRecipient: '受取人',
    shippingAddress: '送付先住所',
    copyAddress: '住所をコピー',
    copied: 'コピーしました',
    giftThanks: '温かいお祝いとお心遣いに、心より感謝申し上げます。',
    rsvpKicker: 'ご出欠のお願い',
    rsvpTitle: 'ご出欠について',
    rsvpDescription: '皆さまのご出席と祝福が、私たちにとって何よりの贈り物です。',
    fullName: 'お名前',
    yourName: 'お名前をご入力ください',
    whatsapp: 'WhatsApp番号',
    optional: '任意',
    attendanceQuestion: 'ご出席いただけますか？',
    attending: '出席',
    notAttending: '欠席',
    unsure: '未定',
    wishes: 'メッセージ・お祝いの言葉',
    wishesPlaceholder: '私たちへのメッセージをお寄せください',
    sending: '送信中...',
    submit: '回答を送信',
    submitSuccess: 'ありがとうございます。ご回答を受け付けました。',
    submitError: '送信できませんでした。しばらくしてからもう一度お試しください。',
    defaultMessage: 'ご招待ありがとうございます。心よりお祝い申し上げます、',
    confirmationsKicker: '大切な皆さまからの言葉',
    confirmationsTitle: 'お祝いの言葉・出席確認',
    confirmationsDescription: '私たちの歩みに寄り添う、すべての祝福に感謝いたします。',
    statusAttending: '出席予定',
    statusNotAttending: '欠席予定',
    statusUnsure: '未回答',
    confirmationsPagination: 'お祝いの言葉と回答のページ',
    previous: '前へ',
    next: '次へ',
    footerMessage: 'ご臨席のうえ、私たちの門出を祝福していただけましたら幸いです。',
    madeWithLove: '愛を込めて制作：',
  },
}

export const ramaLocales: RamaLocale[] = ['id', 'en', 'yue', 'ja']
