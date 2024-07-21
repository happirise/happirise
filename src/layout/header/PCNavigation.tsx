export default function PCNavigation() {
  return (
    <nav className="font-bold justify-between w-[570px] hidden lg:flex">
      {/* ビジョン → View More で Value */}
      <a className="cursor-pointer" href="#message">
        ご挨拶
      </a>
      {/* 我々ができること */}
      <a className="cursor-pointer" href="#work">
        私たちの仕事
      </a>
      {/* お知らせ */}
      <a className="cursor-pointer" href="#info">
        お知らせ
      </a>
      {/* 代表メッセージ, 会社情報 → View More で 事業概要 */}
      <a className="cursor-pointer" href="#company">
        会社情報
      </a>
      {/* お問い合わせ */}
      <a className="cursor-pointer" href="#contact">
        お問い合わせ
      </a>
    </nav>
  );
}
