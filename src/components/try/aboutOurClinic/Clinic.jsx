import React from "react";
import classes from "./clinic.module.css";

import ClinicItem from "./aboutClinicComponents/ClinicItem";

import rabotaemPoStandrtam from "./images/rabotaemPoStandrtam.jpg";
import useCifrovoiPodhod from "./images/useCifrovoiPodhod.jpg";
import neDelaemGiperDiognostiky from "./images/neDelaemGiperDiognostiky.jpg";
import zapicNaPriem from "./images/zapicNaPriem.jpg";
import priemDoctora from "./images/priemDoctora.jpg";
import lechenie from "./images/lechenie.jpg";
import control from "./images/control.jpg";

const Clinic = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>О НАШЕЙ КЛИНИКЕ</h2>
        </div>
        <div className={classes.all_items}>
          <div className={classes.top}>
            <ClinicItem
              image={rabotaemPoStandrtam}
              h2="РАБОТАЕМ ПО СТАНДАРТАМ"
              p={` Ibolot использует стандарты московского медицинского центра "Открытая Клиника". Наши врачи используют стандартизированныеалгоритмы приёма пациентов.`}
            />
            <ClinicItem
              image={useCifrovoiPodhod}
              h2="ИСПОЛЬЗУЕМ ЦИФРОВОЙ ПОДХОД"
              p={`Ibolot использует инновационный подход к ведению приёмов – мы клиника, в которой информационные технологии интегрированы во все процессы.`}
            />
            <ClinicItem
              image={neDelaemGiperDiognostiky}
              h2="НЕ ДЕЛАЕМ ГИПЕРДИАГНОСТИКУ"
              p={`Ibolot выстраивает доверительные отношения со своими пациентами. Мы не позволяем нашим врачам выписывать лишние назначения по лекарствам и лабораторным анализам.`}
            />
          </div>

          <div className={classes.buttom}>
            <ClinicItem
              image={zapicNaPriem}
              h2="ЗАПИСЬ НА ПРИЁМ"
              p={`Вы записываетесь на приём к доктору по телефону или сайт клиники, и выбираете удобное для себя время`}
            />
            <ClinicItem
              image={priemDoctora}
              h2="ПРИЁМ ДОКТОРА"
              p={`Вы приходите в выбранное вами время. Наш доктор проведёт осмотр и выпишет программу лечения`}
            />
            <ClinicItem
              image={lechenie}
              h2="ЛЕЧЕНИЕ"
              p={`Вы будете выполнять программу лечения на дому или в клинике`}
            />
            <ClinicItem
              image={control}
              h2="КОНТРОЛЬ"
              p={`Главный врач периодически проверяет работу врача на оптимальность проведенного лечения.`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clinic;
