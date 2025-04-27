// Ce composant est utiliser pour afficher l'intergraliter des taches
import { useState } from "react";
import { Footer } from "./footer/footer";
import { Header } from "./header/Header";
import { TaskInput } from "./taskInput/taskInput";
import { TaskList } from "./taskList/TaskList";

export const TaskContainer = () => {
  const [taskList, setTaskList] = useState([]);

  // Fonction pour ajouter une tache
  // On recupere le titre de la tache et on l'ajoute à la liste des taches
  const addTask = (title) => {
    const newTask = {
      id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1, // On verifie si la liste des taches n'est pas vide
      title: title,
      completed: false,
    };

    setTaskList([...taskList, newTask]);
  };

  console.log("Liste des tache : ",taskList);

  // Fonction pour editer une tache
  // On recupere l'id de la tache et on la met à jour
  const editTask = (id, completedValue) => {
    setTaskList(
      taskList.map((task) => 
        task.id === id ? { ...task, completed: !completedValue } : task
      )
    );
  };

  // Fonction pour supprimer une tache
  // On recupere l'id de la tache et on la supprime de la liste des taches
  // On utilise la fonction filter pour supprimer la tache
  const deleteTask = (id) => {
    setTaskList(taskList.filter((task) => task.id !== id));
  };

  // Fonction pour recuperer le nombre de taches completes et non completes
  // On utilise la fonction filter pour recuperer le nombre de taches completes et non completes
  // On utilise la fonction length pour recuperer le nombre de taches
  const getTaskCounts = () => {
    const completedTask = taskList.filter((task) => task.completed).length;
    const uncompletedTask = taskList.filter((task) => !task.completed).length;
    return {
      completedTask,
      uncompletedTask,
    };
  };

  const { completedTask, uncompletedTask } = getTaskCounts();
  // console.log("Taches completes : ", completedTask, "Taches non completes : ", uncompletedTask);

  return (
    <main>
      <Header />
      <TaskInput addTask={addTask} />

      <TaskList
        taskList={taskList}
        editTask={editTask}
        deleteTask={deleteTask}
        completedTask ={completedTask}
        uncompletedTask={uncompletedTask}
      />

      <Footer completedTask={completedTask} />
    </main>
  );
};
