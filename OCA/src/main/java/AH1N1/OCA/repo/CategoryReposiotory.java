package AH1N1.OCA.repo;

import AH1N1.OCA.repo.entiity.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoryReposiotory extends JpaRepository<Category,Long> {
}
