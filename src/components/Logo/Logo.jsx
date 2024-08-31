import s from "./style.module.css";
export function Logo({ title, subtitle }) {
  return (
    <>
      <div>
        <div className={s.container}>
          <div className={s.logo_txt}>{title}</div>
        </div>
        <div className={s.subtitle}>{subtitle}</div>
      </div>
    </>
  );
}
