export type RamaLocale = 'id' | 'en' | 'yue' | 'ja'

export type RamaTranslation = {
  localeName: string
  language: string
  montageCaption: string
  splashInvitation: string
  coverEyebrow: string
  dearGuest: string
  openInvitation: string
  musicOn: string
  musicOff: string
  heroCeremony: string
  heroEyebrow: string
  explore: string
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
  galleryKicker: string
  galleryTitle: string
  galleryDescription: string
  galleryHint: string
  galleryLabel: string
  openPhoto: string
  previousPhoto: string
  nextPhoto: string
  closeGallery: string
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
    splashInvitation: 'Wedding invitation of',
    coverEyebrow: 'The wedding of',
    dearGuest: 'Kepada Yth.',
    openInvitation: 'Buka Undangan',
    musicOn: 'Matikan musik',
    musicOff: 'Putar musik',
    heroCeremony: 'Pawiwahan',
    heroEyebrow: 'The wedding celebration of',
    explore: 'Explore',
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
    galleryKicker: 'A glimpse of us',
    galleryTitle: 'Our moments',
    galleryDescription: 'A few frames from our story.',
    galleryHint: 'Geser untuk melihat semua foto',
    galleryLabel: 'Galeri foto yang dapat digeser',
    openPhoto: 'Buka foto',
    previousPhoto: 'Foto sebelumnya',
    nextPhoto: 'Foto berikutnya',
    closeGallery: 'Tutup galeri',
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
    splashInvitation: 'Wedding invitation of',
    coverEyebrow: 'The wedding of',
    dearGuest: 'Dear',
    openInvitation: 'Open Invitation',
    musicOn: 'Turn music off',
    musicOff: 'Play music',
    heroCeremony: 'Wedding Ceremony',
    heroEyebrow: 'The wedding celebration of',
    explore: 'Explore',
    welcomeTitle: 'A quiet promise,\na lifetime together.',
    welcomeCopy: 'With the blessing and grace of Ida Sang Hyang Widhi Wasa, we intend to celebrate our wedding ceremony. With great joy, we invite you to join us and bestow your blessings upon our marriage.',
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
    galleryKicker: 'A glimpse of us',
    galleryTitle: 'Our moments',
    galleryDescription: 'A few frames from our story.',
    galleryHint: 'Swipe to see all photos',
    galleryLabel: 'Swipeable photo gallery',
    openPhoto: 'Open photo',
    previousPhoto: 'Previous photo',
    nextPhoto: 'Next photo',
    closeGallery: 'Close gallery',
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
    splashInvitation: '誠邀您出席婚禮',
    coverEyebrow: '我哋嘅婚禮',
    dearGuest: '敬邀',
    openInvitation: '打開喜帖',
    musicOn: '關閉音樂',
    musicOff: '播放音樂',
    heroCeremony: '婚禮',
    heroEyebrow: '誠邀您見證我哋嘅婚禮',
    explore: '細看',
    welcomeTitle: '一個溫柔嘅承諾，\n一生相伴。',
    welcomeCopy: '承蒙 Ida Sang Hyang Widhi Wasa 嘅恩典與祝福，我哋將舉行婚禮。懷住滿心喜悅，誠邀您蒞臨見證，並為我哋送上祝福。',
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
    galleryKicker: '我哋嘅片段',
    galleryTitle: '珍貴時刻',
    galleryDescription: '我哋故事入面嘅幾個畫面。',
    galleryHint: '左右滑動睇晒所有相片',
    galleryLabel: '可滑動相片集',
    openPhoto: '打開相片',
    previousPhoto: '上一張相',
    nextPhoto: '下一張相',
    closeGallery: '關閉相片集',
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
    splashInvitation: '結婚式のご案内',
    coverEyebrow: '私たちの結婚式',
    dearGuest: '謹んでご招待申し上げます',
    openInvitation: '招待状を開く',
    musicOn: '音楽を停止',
    musicOff: '音楽を再生',
    heroCeremony: '結婚式',
    heroEyebrow: '私たちの門出を見守ってください',
    explore: 'ご案内を見る',
    welcomeTitle: '静かな誓いを、\n永遠の約束へ。',
    welcomeCopy: 'Ida Sang Hyang Widhi Wasa の恵みと祝福のもと、私たちは結婚式を執り行うこととなりました。喜びの日を皆さまと分かち合い、温かな祝福を賜りたく、謹んでご案内申し上げます。',
    coupleKicker: '新郎新婦',
    coupleTitle: '私たちについて',
    groom: '新郎',
    bride: '新婦',
    groomChildOrder: '第五子　両親',
    brideChildOrder: '長女　両親',
    saveDate: '日程のご案内',
    happyDay: '私たちの特別な日',
    onwards: 'より',
    countdownLabel: '結婚式までのカウントダウン',
    days: '日',
    hours: '時間',
    minutes: '分',
    seconds: '秒',
    viewLocation: '会場を見る',
    galleryKicker: 'ふたりの軌跡',
    galleryTitle: '思い出',
    galleryDescription: '私たちの物語を彩る、いくつかの瞬間。',
    galleryHint: 'スワイプしてすべての写真を見る',
    galleryLabel: 'スワイプできるフォトギャラリー',
    openPhoto: '写真を開く',
    previousPhoto: '前の写真',
    nextPhoto: '次の写真',
    closeGallery: 'ギャラリーを閉じる',
    rsvpKicker: 'ご出欠のお願い',
    rsvpTitle: '出席確認',
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
