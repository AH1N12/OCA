package AH1N1.OCA.repo;

import AH1N1.OCA.repo.entiity.Folder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FolderRepository extends JpaRepository<Folder, Long> {

    List<Folder> findByCategoryId(Long categoryId);
}
